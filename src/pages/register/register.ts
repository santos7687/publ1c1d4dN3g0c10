import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  myForm: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder
  ) { 
      this.myForm = this.createMyForm();
  }

  private createMyForm()
  {
    return this.formBuilder.group({
      name: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',Validators.required],
      dateBirth: ['',Validators.required],
      passwordRetry: this.formBuilder.group({
        password: ['',Validators.required],
        passwordConfirmation: ['',Validators.required],
      }),
      gender: ['',Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
