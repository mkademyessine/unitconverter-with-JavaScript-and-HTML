import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {

  public celtokel =''; // variable will carry the celsius to kelvin input value
  public keltocel =''; // variable will carry the kelvin to cel input value
  public celtofah =''; // variable wil carry the celsius to fahrenheit value
  public fahtocel =''; // varaibel will carry the fahrenheit to celsius value
  public keltofah =''; // variable will carry the kelvin to fahrenheit value
  public fahtokel =''; // variable will carry the fahrenheit to kelvin value 

  public formgroup !: FormGroup;
  constructor(public formbuilder : FormBuilder) { }

  ngOnInit(): void {
    this.formgroup = this.formbuilder.group({
      celTokelvin :'',
      kelvinTocel :'',     
      celTofahren :'', 
      fahrenTocel :'',
      kelvinTofahren :'',
      fahrenTokelvin :''
    })
  }

  // define convert from celsius to kelvin function
  convertcelTokelvin(){
    var x = this.formgroup.get('celTokelvin')?.value; // x will carry the celsius to kelvin input value
    var y = this.formgroup.get('kelvinTocel')?.value; // y will carry the kelvi to celsius input value
    // convert from celsius to kelvin 
    if (x !== '' && y === ''){
      this.keltocel =( x + 273.15).toString();
    }
    // convert from kelvin to celsius
    else if (x === '' && y !== ''){
      this.celtokel = (y - 273.15).toString();
    }
    // if there is no value don't convert
    else if (x === '' && y === '')return
    else return
  }

  // define conver from celsius to fahrenheit function
  convertcelTofahren(){
    var x = this.formgroup.get('celTofahren')?.value; // x will carry the celsius to fahrenheit input value
    var y = this.formgroup.get('fahrenTocel')?.value; // y will carry the fahrenheit to celsius inpt value
    // convert from celsuis to fahrenheit 
    if (x !== '' && y === ''){
      this.fahtocel = ((x * 1.8) + 32).toString();
    }
    // convert from fahrenheit to celsuis
    else if (x === '' && y !==''){
      this.celtofah =( (y - 32)/ 1.8).toString();
    }
  }

  // define the convert from kelvin to fahrenheit function
  convertkeltofah(){
    var x = this.formgroup.get('kelvinTofahren')?.value; // x will carry the kelvin to fahrenheit input value
    var y = this.formgroup.get('fahrenTokelvin')?.value; // y will carry the fahrenheiht to kelvin input value
    // convert from kelvin to fahrenheit
    if (x !== '' && y ===''){
      this.fahtokel =((x-273.15)*1.8 +32).toString();
    }
    // convert from fahrenheit to kelvin
    else if (x ==='' && y !== ''){
      this.keltofah =(( y - 32)*1.8 + 273.15 ).toString();
    }
    // if there is no value don't convert
    else if(x === '' && y ==='')return
    else return
  }

  // define the convert function that will call all convert functions
  convert(){
    this.convertcelTofahren();
    this.convertcelTokelvin();
    this.convertkeltofah();
  }

  // define the reset function that will reset al input fields 
  reset(){
    this.formgroup.reset();
  }

}
