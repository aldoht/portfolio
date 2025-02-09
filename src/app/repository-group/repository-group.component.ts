import { Component, inject } from '@angular/core';
import {NgForOf} from '@angular/common';
import {RepositoryComponent} from '../repository/repository.component';
import {GithubService} from '../github-api/github.service';

@Component({
  selector: 'app-repository-group',
  imports: [
    NgForOf,
    RepositoryComponent
  ],
  templateUrl: './repository-group.component.html',
  styleUrl: './repository-group.component.css'
})
export class RepositoryGroupComponent {
  public repositories: any[] = [];
  private _githubService: GithubService = inject(GithubService);

  async ngOnInit(): Promise<void> {
    this.repositories = await this._githubService.getRepositories();
  }
}
