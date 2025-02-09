import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repository',
  imports: [],
  templateUrl: './repository.component.html',
  styleUrl: './repository.component.css'
})
export class RepositoryComponent {
  @Input() repositoryTitle: string = '';
  @Input() repositoryLastCommit: string = '';
  @Input() repositoryShortDescription: string = '';
  @Input() repositoryUrl: string = '';
}
