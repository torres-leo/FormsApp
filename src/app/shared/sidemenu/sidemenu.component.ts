import { Component } from '@angular/core';

interface MenuItem {
  text: string;
  path: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent {
  inTemplate: boolean = true;

  templateItems: MenuItem[] = [
    { text: 'Basics', path: './template/basics' },
    { text: 'Dynamics', path: './template/dynamics' },
    { text: 'Switches', path: './template/switches' },
  ];

  reactiveItems: MenuItem[] = [
    { text: 'Basics', path: './reactive/basics' },
    { text: 'Dynamics', path: './reactive/dynamics' },
    { text: 'Switches', path: './reactive/switches' },
  ];

  authMenu: MenuItem[] = [
    { text: 'Login', path: './auth/login' },
    { text: 'Register', path: './auth/register' },
  ];
}
