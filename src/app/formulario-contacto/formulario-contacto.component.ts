import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent implements OnInit{

  // tslint:disable-next-line: max-line-length (expresion regular para validar email)
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  createFormGroup() {
    return new FormGroup ({
      email: new FormControl('', [Validators.required, Validators.minLength(5),
      Validators.pattern(this.emailPattern)]),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      message: new FormControl('', [Validators.required, Validators.minLength(10),
      Validators.maxLength(100)])
    });
  }
  
  contactForm: FormGroup;

  constructor() {
    this.contactForm = this.createFormGroup();  
  }

  ngOnInit(): void {
    
  }

  onResetForm() {
    this.contactForm.reset();
  }
  onSaveForm() {
    if (this.contactForm.valid) {
      console.log('Saved', this.contactForm.value);
      this.onResetForm();
      console.log('Valid');
    } else {
      console.log('Not valid');
    }
    
  }
  
  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }
  
}

