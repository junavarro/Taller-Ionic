import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuariosProvider } from '../../providers/usuarios/usuarios'
import { PalabraPage } from '../palabra/palabra'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
usuarios:any = [];
url:any = " ";
  constructor(public navCtrl: NavController, public provider: UsuariosProvider) {

  }
  ionViewDidLoad(){
    this.provider.load().subscribe(
      (data)=>{this.usuarios = data;}
    )
  }
  PalabraSelected(Id:any){
   this.navCtrl.push("PalabraPage", {Id});
   console.log("servicio manda de :",Id);
  }
  updateVideoUrl(id:string){
     this.url="../assets/img/"+id;
     console.log( this.url);
 }

}
