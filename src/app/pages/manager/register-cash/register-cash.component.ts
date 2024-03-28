import { Component } from '@angular/core';
import { MenuComponent } from '../../../components/menu/menu.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CashService } from '../../../api/cash.service';

@Component({
  selector: 'app-register-cash',
  standalone: true,
  imports: [
    MenuComponent,
    ReactiveFormsModule
  ],
  templateUrl: './register-cash.component.html',
  styleUrl: './register-cash.component.css'
})
export class RegisterCashComponent {
  description = new FormControl('', [Validators.required]); 
  
  constructor(
    private cashS: CashService,
  ){}
  
  createCash() {
    if (this.description.valid) {
      this.cashS.postCash(this.description.value!).subscribe((response: any) => {
      
        console.log(response.data)
        
      });
      alert('Caja creada exitosamente');
      this.description.setValue('');
      console.log('Descripción válida:', this.description.value);
    } else {
      alert('La descripción no puede estar vacía');
    }
  }
    

}
