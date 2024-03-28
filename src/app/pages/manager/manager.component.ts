import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [
    MenuComponent,
    RouterLink
  ],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.css'
})
export class ManagerComponent {

}
