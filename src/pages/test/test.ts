import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  public hola: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hola = "Hola mundo!";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  prueba() {
    console.log('holaaa', this.hola);
  }

}
