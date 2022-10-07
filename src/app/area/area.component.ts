import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { retry } from 'rxjs';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
    
    public mtocent = ''; // variable will carry the meter to centimeter square input
    public centtom ='' ;  // variable will carry the centimeter to meter square input
    public mtohectare =''; // variabel will carry the meter to hectare input
    public hectaretom = ''; // variabel will carry the hectare to meter input
    public mtokm =''; // variable will carry the kilometer to meter input
    public kmtom =''; // variable will carry the meter to kilometer input
    public kmtohectare = ''; // variable will carry the kilometer to hectare input
    public hectaretokm =''; // variable will carry the hectare to kilometer input

  public formgroup !:FormGroup;
  constructor(public formbuilder : FormBuilder) {
   }

  ngOnInit(): void {
    this.formgroup = this.formbuilder.group({
        centTometer: '',
        meterTocent: '',
        meterTohectare: '',
        hectareTometer: '',
        kilometerTometer: '',
        meterTokilometer: '',
        kilometerTohectare: '',
        hectareTokilometer: ''

    })
  }

   // convert from meter square to centimeter square function
   convertmeterTocent(){
    var x = this.formgroup.get('meterTocent')?.value; // x will carry meter to centimeter input value
    var y = this.formgroup.get('centTometer')?.value; // y will carry centimeter to meter input value
    // convert from meter to centimeter square
    if (x !== '' && y === ''){
        this.centtom = (x * 10000).toString();
    }
    // convert from centimeter to meter
    else if (x === '' && y !== ''){
        this.mtocent = (y / 10000).toString();
    }
    // if there is no value entered don't convert
    else if (x === '' &&  y === '')return
    else return
   } 
   
   // define the convert form meter square to hectare function
   convertmeterTohectare(){
    var x = this.formgroup.get('meterTohectare')?.value; // x will carry meter to hectare input value
    var y = this.formgroup.get('hectareTometer')?.value; // y will carry hectare to meter input value
    //convert from meter square to hectare 
    if (x !== '' && y === ''){
        this.hectaretom =(x / 10000).toString();
    }
    // convert from meter square to hectare
    else if (x === '' && y !==''){
        this.mtohectare = (y * 10000).toString();
    }
    // if there is no value don't convert *
    else if (x === '' && y ==='')return
    else return
   }

   // define the convert from kilometer to meter function
   converteterTokilometer(){
    var x = this.formgroup.get('kilometerTometer')?.value; // variable will carry kilometer to meter input value
    var y = this.formgroup.get('meterTokilometer')?.value; // variable will carry meter to kilometer input value
    // convert form kilometer to meter
    if (x !== '' && y === ''){
        this.mtokm = (x * 1000000).toString();
    }
    // convert from meter to kilometer
    else if (x === '' && y !== ''){
        this.kmtom = (y / 1000000).toString();
    }
    // if there is no value don't convert
    else if (x === '' && y === '')return
    else return
   }

   // define the convert from kilometer square to hectare
   convertkilometerThectare(){
    var x = this.formgroup.get('kilometerTohectare')?.value; // x will carry kilometer to hectare input value
    var y = this.formgroup.get('hectareTokilometer')?.value; // y will carry hectare to kilometer inpu value
    // convert from kilometer to hectare 
    if (x !== '' && y === ''){
        this.hectaretokm = (x * 100).toString();
    }
    // convert from hectare to kilometer
    else if (x === '' && y !== ''){
        this.kmtohectare = (y / 100).toString();
    }
    // if there is no value don't convert
    else if (x === '' && y === '')return
    else return
   }

   // define the convert function to call all convert functions
   convert(){
    this.converteterTokilometer();
    this.convertkilometerThectare();
    this.convertmeterTocent();
    this.convertmeterTohectare();
   }

   // define the reset functin to reset all input fields
   reset(){
    this.formgroup.reset();
   }

}
