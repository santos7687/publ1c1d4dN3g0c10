import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToLoginPage()
  {
    this.navCtrl.push('LoginPage');
  }

  goToRegisterPage()
  {
    this.navCtrl.push('RegisterPage');
  }

}
