import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RepositoryComponent} from './repository/repository.component';
import {RepositoryGroupComponent} from './repository-group/repository-group.component';
import {IconComponent} from './icon/icon.component';
import {HeaderComponent} from './header/header.component';
import {MainContentComponent} from './main-content/main-content.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RepositoryComponent, RepositoryGroupComponent, IconComponent, HeaderComponent, MainContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
