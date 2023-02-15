import { Component } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  model = new Person('IvaNegFer','contra');

  submitted = false;

  onSubmit() {this.submitted = true; }

  newPerson() {
    this.model = new Person('','');
  };

}
