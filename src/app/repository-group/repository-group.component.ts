import {Component, inject, Input} from '@angular/core';
import {NgForOf} from '@angular/common';
import {RepositoryComponent} from '../repository/repository.component';
import {GithubService} from '../github-api/github.service';

@Component({
  selector: 'app-repository-group',
  imports: [
    NgForOf,
    RepositoryComponent,
  ],
  templateUrl: './repository-group.component.html',
  styleUrl: './repository-group.component.css'
})
export class RepositoryGroupComponent {
  @Input() smallVersion: boolean = false;
  public repositories: any[] = [];
  private _githubService: GithubService = inject(GithubService);

  async ngOnInit(): Promise<void> {
    this.repositories = await this._githubService.getRepositories();
    this.repositories = this.repositories
      .sort(
      (a: { pushed_at: string | number | Date; }, b: { pushed_at: string | number | Date; }) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
    if (this.smallVersion) {
      this.repositories = this.repositories
        .slice(0, 5);
    } else {
      this.repositories = this.repositories
        .slice(0, 10);
    }
  }
}
