import { Component } from '@angular/core';

@Component({
  selector: 'app-repository',
  imports: [],
  templateUrl: './repository.component.html',
  styleUrl: './repository.component.css'
})
export class RepositoryComponent {
  repositoryTitle = 'Title';
  repositoryLastCommit = '01/01/2001';
  repositoryShortDescription = 'Short description';
}
