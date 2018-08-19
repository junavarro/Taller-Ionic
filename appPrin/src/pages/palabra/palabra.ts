import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UsuariosProvider } from '../../providers/usuarios/usuarios';

/**
 * Generated class for the PalabraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-palabra',
  templateUrl: 'palabra.html',
})
export class PalabraPage {
nombreID:any = " ";
nombres:any = [];
nombreEs:any= "";
nombreBri:any = "";
imageURl:any = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider : UsuariosProvider) {
  	    this.nombreID = this.navParams.get('Id');
		console.log("el servicio es:", this.nombreID)
  }

  ionViewDidLoad() {
  	 this.provider.load().subscribe(
      (data)=>{ this.nombres = data; 
      	for (let i in this.nombres) {
  	if(this.nombreID == i){
  		this.nombreBri = this.nombres[i].nombreBri;
  		this.nombreEs = this.nombres[i].nombreEs;
  		this.imageURl = this.nombres[i].image;
  		console.log("nombre:" + this.nombreBri);
  		}
  	}
	});	
    
  	 console.log(this.nombres);
  
  	}


      

}
