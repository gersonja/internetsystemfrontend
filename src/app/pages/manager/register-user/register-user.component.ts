import { Component } from '@angular/core';
import { MenuComponent } from '../../../components/menu/menu.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../api/users.service';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [
    MenuComponent,
    ReactiveFormsModule
  ],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {
  username = new FormControl('', [Validators.required]); 
  email= new FormControl('', [Validators.required]); 
  password = new FormControl('', [Validators.required]); 
  constructor(
    private userS: UserService,
  ){}
  
  createUser() {
    if (!this.username.valid) {
      
      alert('El nombre no puede ser vacío');

      //this.description.setValue('');
     
    } else if(!this.email.valid){
      alert('El email no puede ser vacío');
    } 
    else if(!this.password.valid){
      alert('El password no puede ser vacío');
    }else {
      this.userS.postUser(
        this.username.value!,
        this.email.value!,
        this.password.value!,
        ).subscribe((response: any) => {
      
        console.log(response.data)
        
      });
      this.username.setValue('');
      this.email.setValue('');
      this.password.setValue('');
      alert('Usuario creado satisfactoriamente');
    }
  }
}
