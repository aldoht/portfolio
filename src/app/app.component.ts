import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RepositoryComponent} from './repository/repository.component';
import {RepositoryGroupComponent} from './repository-group/repository-group.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RepositoryComponent, RepositoryGroupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
