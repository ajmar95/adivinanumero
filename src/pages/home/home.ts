import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
// tipos primitivos son number , string , boolean , any (cualquier cosa), array
num : number;
mayormenor: string="..."; 
numSecreto : number=this.numAleatorio(0,10) ;
  constructor(public navCtrl: NavController) {

  }
  numAleatorio(a,b){
return Math.round(Math.random()*(b-a)+parseInt(a));
  }
compruebaNumero(){
  if(this.num){
    if(this.numSecreto < this.num){
      this.mayormenor= "menor";
    
    }else if(this.numSecreto>this.num){
      this.mayormenor="mayor";
    }
    else {
      this.mayormenor= '';
    }
  }
}
reinicia(){
  this.num=null;
  this.mayormenor="...";
  this.numSecreto=this.numAleatorio(0,10);
}
}
