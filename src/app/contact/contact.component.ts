import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  RegisterForm:FormGroup =new FormGroup({
    name : new FormControl('',[Validators.required ,Validators.minLength(5),Validators.maxLength(20)]),
    Email: new FormControl('',[Validators.required , Validators.email]),
    Password: new FormControl('',[Validators.required,Validators.pattern(/^\w{6,}$/)]),
    Subject: new FormControl(''),
    YourMessage: new FormControl(''),
 })
 
 handleForm():void{
 
   if(this.RegisterForm.valid == true)
   console.log(this.RegisterForm.valid)
   
 }
}
