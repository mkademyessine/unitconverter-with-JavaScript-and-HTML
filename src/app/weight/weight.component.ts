import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit {

  public ktogramme = ''; // variable will carry the kilogramme to gramme input value
  public grammetok = ''; // variable will carry the gramme to kilomgramme input value
  public ktotone = ''; // variable will carry the kilogramme to tone input value
  public tonetok = ''; // variable will carry the tone to kilogramme input value
  public quintaltok =''; // variable will carry the quintal to kilogramme input value
  public ktoquintal = ''; // variable will carry the kilogramme to quintal input value
  public ktopound = ''; // variable will carry the kilograme to pound input value
  public poundtok = ''; // variable will carry the poundto kilogramme input value


  public formgroup !: FormGroup;
  constructor(public formbuilder : FormBuilder) { }

  ngOnInit(): void {
    this.formgroup = this.formbuilder.group({
      kiloTogramme :'',
      grammeTokilo :'',
      kiloTotone :'',
      toneTokilo :'',
      kiloToquital :'',
      quintalTokilo :'',
      kiloTopound :'',
      poundTokilo :''
    })
  }

  // define the convert from kilogramme to gramme function
  convertkiloTogramme(){
    var x = this.formgroup.get('kiloTogramme')?.value; // x will carry the value of kilogramme to gramme input 
    var y = this.formgroup.get('grammeTokilo')?.value; // y will carry the value of gramme to kilogramme input
    // convert from kilogramme to gramme
    if (x !== '' && y ===''){
      this.grammetok = (x = 1000).toString();
    }
    // convert from gramme to kilogramme
    else if (x === '' && y !==''){
      this.ktogramme = (y / 1000).toString();
    }
    // if there is no value don't convert
    else if (x === '' && y ==='')return
    else return
  }

  // define the convert from kilogramme to tone function
  convertkiloTotone(){
    var x = this.formgroup.get('kiloTotone')?.value; // x will carry the kilogramme to tone input value
    var y = this.formgroup.get('toneTokilo')?.value; // y will carry the tone to kilogramme input value
    // convert from kilogramme to tone
    if (x !== '' && y ===''){
      this.tonetok = (x /1000).toString();
    }
    // convert from tone to kilogramme
    else if (x === '' && y !== ''){
      this.ktotone = (y * 1000).toString();
    }
    // if there is no value don't convert
    else if (x === '' && y ==='')return
    else return
  }

  // define the convert from kilogramme to quintal function
  convertquintalTokilo(){
    var x = this.formgroup.get('kiloToquital')?.value; // x will carry the kilogramme to quintal input value
    var y = this.formgroup.get('quintalTokilo')?.value; // y will carry the quintal to kilogramme input value
    // convert from kilogramme to quintal
    if (x !== '' && y ===''){
      this.quintaltok = (x /100).toString();
    }
    // convert from quintal to kilogramme
    else if (x === '' && y !== ''){
      this.ktoquintal = (y * 100).toString();
    }
    // if there is no value don't convert
    else if (x === '' && y ==='')return
    else return
  }

  // define the convert from kilogramme to pound function
  convertkiloTopound(){
    var x = this.formgroup.get('kiloTopound')?.value; // x will carry the kilogramme to pound input value
    var y = this.formgroup.get('poundTokilo')?.value; // y will carrry the pound to kilogramme input value
    // convert from kilogramme to pound
    if (x !== '' && y ===''){
      this.poundtok = (x * 2.205).toString();
    }
    // convert from pound to kilogramme
    else if (x === '' && y !== ''){
      this.ktopound = (y / 2.205).toString();
    }
    // if there is no value don't convert
    else if (x === '' && y ==='')return
    else return
  }

  // define convert function to call the convert functions
  convert(){
    this.convertkiloTogramme();
    this.convertkiloTopound();
    this.convertkiloTotone();
    this.convertquintalTokilo();
  }

  // define the reset function to reset all input fields
  reset (){
    this.formgroup.reset();
  }

}
