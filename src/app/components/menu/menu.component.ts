import { Component } from '@angular/core';
import { MenuService } from '../../api/menu.service';
import { Menu } from '../../interfaces/menu';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  rol:number = 1 
  menuItems:Menu []= [{
    menuid: 0,
    description: '',
    rolRolid: 0,
    icon: ''
    
  }];
 
  constructor(
    private menuS: MenuService,
   
    
    //private router: Router
  ) {
    
  }
  ngOnInit() {
    var menuRol = this.menuS.getMenuRol(this.rol).subscribe((response:any)=>{
      console.log(response.data)
      this.menuItems = response.data
    });
  }
}
