import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css'],
})
export class BasicsComponent {
  @ViewChild('basicForm') basicForm!: NgForm;

  initForm = {
    product: '',
    price: 0,
    stock: 0,
  };

  sendForm() {
    console.log(this.basicForm);
  }

  validName(): boolean {
    return (
      this.basicForm?.controls['product']?.invalid &&
      this.basicForm?.controls['product']?.touched
    );
  }

  validPrice(): boolean {
    return (
      this.basicForm?.controls['price']?.touched &&
      this.basicForm?.controls['price']?.value <= 0
    );
  }
}
