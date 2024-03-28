import { Component } from '@angular/core';
import { UserService } from '../../api/users.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  message : string = '';
  email:string ='manager@admin';
  password:string ='admin';
  constructor(
    private userS : UserService,
    //private fb: FormBuilder
 
  ){

  }
  
  
  
  //frmGroup!: FormGroup;

  mensajePassword? :string;

  
  
  ngOnInit(): void {
    //this.frmGroup = this.initForm();
  }



  login(){
    
  }

 /* initForm() : FormGroup{
    return this.fb.group({
      
      email:['', [Validators.required, Validators.minLength(8), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]], 
      
    });
  }*/
  
  
}
