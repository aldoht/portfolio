import { Component } from '@angular/core';
import {RepositoryGroupComponent} from '../repository-group/repository-group.component';
@Component({
  selector: 'app-content',
  imports: [
    RepositoryGroupComponent,
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
