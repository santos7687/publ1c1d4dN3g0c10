import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Facebook } from '@ionic-native/facebook';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  users: any = {};
  showUser: boolean = false;

  myForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public auth: Auth, 
    public user: User,
    public facebook: Facebook
  ) {
    this.myForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loginFacebook(){
    this.facebook.login(['public_profile', 'email'])
    .then(rta =>{
      console.log(rta.status);
      if(rta.status == 'connected'){
        this.getInfo();
      };
    })
    .catch(error =>{
      console.error( error );
    });

  }

  getInfo(){
    this.facebook.api('/me?fields=id,name,email,first_name,picture,last_name,gender',['public_profile','email'])
    .then(data=>{
      console.log(data);
      this.showUser = true;
      this.users = data;
    })

    .catch(error =>{
      console.error( error);
    });
  }

  loginUser(){

    console.log("Email:" + this.myForm.value.email);
    console.log("Password:" + this.myForm.value.password);
   
    let details = {
      'email': this.myForm.value.email,
      'password': this.myForm.value.password
    };

    this.auth.login('basic', details).then(() => {
      console.log("User logging");
      this.navCtrl.push('NewsListingPage');
    }, (err) => {

        console.log(err.message);

        let errors = '';
        if(err.message === 'UNPROCESSABLE ENTITY') errors += 'Email isn\'t valid.<br/>';
        if(err.message === 'UNAUTHORIZED') errors += 'Password is required.<br/>';
      }
    );
  

  }

  goToSignup(){
    this.navCtrl.push('RegisterPage');
  }

  goToResetPassword(){
    this.navCtrl.push('ResetPasswordPage');
  }

}
