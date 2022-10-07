import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.css']
})
export class VolumeComponent implements OnInit {

  public mtoliter = ''; // variable will carry meter to liter input value
  public litertom = ''; // variable will carry liter to meter input value
  public millitocent = ''; // variable will cary milliliter to centiliter input value
  public centtomilli = ''; // variable will carry centiliter to milliliter input value
  public mtodec = ''; // variable will carry meter to decimeter input value
  public dectom = ''; // variable will carry decimeter to meter input value
  public mtocent =''; // variable will carry meter to centimeter input value
  public centtom = ''; // variable will carry centimeter to meter input value

  /******************** */
  public formgroup !: FormGroup;
  constructor(public formbuilder : FormBuilder) { }

  ngOnInit(): void {
    this.formgroup = this.formbuilder.group({
      meterToliter : '',
      literTometer : '',
      milliTocent : '',
      cenTomilli : '',
      meterTodecimeter : '',
      decimeterTometer : '',
      meterTcent : '',
      centTometer : ''      
    })
 }


 // define the convert from meter cube to liter
 convertmeterToliter(){
  var x = this.formgroup.get('meterToliter')?.value; // x will carry the value of the meter to liter input
  var y = this.formgroup.get('literTometer')?.value; // y will carry the value of the liter to meter input
  // convert from meter cube to liter
  if (x !== '' && y === ''){
    this.litertom = (x * 1000).toString();
  }
  // convert from liter to meter cube
  else if (x === '' && y !== ''){
    this.mtoliter = (y / 1000).toString();
  }
  // if there is no value don't convert
  else if (x === '' && y === '')return
  else return
 }

 // define the convert from millilitre cube to centimeter cube
 convertmilliTocent(){
  var x = this.formgroup.get('milliTocent')?.value; // x will carry the value of the millilitre to centimeter input
  var y = this.formgroup.get('cenTomilli')?.value; // y will carry the value of the centimeter to milliliter inpu
  // convert from millilter to centimeter 
  if (x !== '' && y ===''){
    this.centtomilli = (x * 1).toString()
  }
  // convert for centimeter cube to milliliter
  else if (x === '' && y !== ''){
    this.millitocent = (y * 1).toString();
  }
  // if there is no value don't convert 
  else if (x === '' && y === '')return
  else return
 }

 // define the convert from meter cube to decimeter cube
 convertmeterTodecimeter(){
  var x = this.formgroup.get('meterTodecimeter')?.value; // x will carry the value of the meter to decimeter input
  var y = this.formgroup.get('decimeterTometer')?.value; // y will carry the value of the decimeter to meter input
  // convert from meter to decimeter cube
  if (x !== '' && y === ''){
    this.dectom = (x * 1000).toString();
  }
  // convert from decimeter to mete cube
  else if (x === '' && y !== ''){
    this.mtodec = (y / 1000).toString();
  }
 }

 // define the convert from meter to centimeter cube function
 convertmeterTcent(){
  var x = this.formgroup.get('meterTcent')?.value; // x will carry the value of meter to centimeter input
  var y = this.formgroup?.get('centTometer')?.value; // y will carry the value of centimeter to meter input
  // convert from meter to centimeter cube
  if (x !== '' && y ===''){
    this.centtom = (x * 10 ** 6).toString();
  }
  // convert from centimeter to meter cube
  else if (x ==='' && y !== ''){
    this.mtocent = (y / 10 ** 6).toString();
  }
  // if there is no value don't convert
  else if (x === '' && y === '')return
  else return 
 }

 // define the conver function that will call convert functions
 convert(){
  this.convertmeterTcent();
  this.convertmeterTodecimeter();
  this.convertmeterToliter();
  this.convertmilliTocent();
 }

 // define the reset functon the reset the value of the formgroup
 reset(){
  this.formgroup.reset();
 }
}
