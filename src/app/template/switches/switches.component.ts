import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css'],
})
export class SwitchesComponent {
  person = {
    gender: 'F',
    notifications: true,
  };

  termsCondition: boolean = false;
}
