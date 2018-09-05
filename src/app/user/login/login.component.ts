import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UserService } from '../../../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
data = {
  username : '',
  password :  ''
};

  constructor(private _router: Router, private userService: UserService) {

    this.userService.getUser().subscribe( task => {
      console.log(task);
    });
  }

  ngOnInit() {
  }
  formSubmit() {
    const username = this.data.username;
    const password = this.data.password;
    const key = btoa(btoa(username) + '??' + password);
    console.log(this.data);
    console.log(key);
    if (username === 'Bob' && password === 'admin') {

      this._router.navigate(['mycenter']);
    }
  }

}
