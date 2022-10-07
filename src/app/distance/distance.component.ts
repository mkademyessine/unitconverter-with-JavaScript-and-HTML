import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { retry } from 'rxjs';

@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.css']
})
export class DistanceComponent implements OnInit {

  public kmtom =''; // variable will carry the value of kilometer to meter input
  public mtokm = ''; // variable will carry the value of meter to kilometer input
  public kmtomile =''; // variable will carry the value of kilometer to mile input
  public miletokm =''; // variable will carry the value of mile to kilometer input
  public mtoin =''; // variable will carry the value of meter to inch input
  public intom =''; // variable will carry the value of inch to meter input
  public mtofeet =''; // variable wil carry the value of the meter to feet input
  public feettom =''; // variabel wil carry the value of the feet to meter input
  public formgroup !: FormGroup;
  constructor(public formbuilder : FormBuilder) {
      
  }
 

  ngOnInit(): void {
    this.formgroup = this.formbuilder.group({
      kiloTometer :'',
      meterTokilo : '', 
      kiloTomile : '',
      mileTokilo : '',  
      meterToinch : '',
      inchTometer : '',  
      meterTofeet :'',
      feetTometer : '' 
    })
    }
    // define the convert function from kilometer to meter and vice versa
    convertkilometerTometer(){
      var x= this.formgroup.get('kiloTometer')?.value;  // x will get the value of the input kilometertometer
      var y = this.formgroup.get('meterTokilo')?.value; // y will get the value of the input meter to kilometer
      // convert from kilometer to meter
      if (x !== '' && y === ''){
        this.mtokm =  (x * 1000).toString(); 
      }
      // convert from meter to kilometer
      else if (x === '' && y !=='') {
        this.kmtom =  (y / 1000).toString();
      }      
      // if there is no value entred don't convert
      else if (x === '' && y ==='') return
      else return
      
     }

     // define the convert function from kilometer to mile
     convertkiloTomile(){
      var x = this.formgroup.get('kiloTomile')?.value; // x will carry the variable of the input kilometer to mile
      var y = this.formgroup.get('mileTokilo')?.value; // y will carry the variable of the input mile to kilometer
      //convert from kilometer to mile
      if (x !== '' && y === ''){
        this.miletokm = (x * 0.621371).toString();
      }
      // convert from mile to kilometer
      else if (x === '' && y !== ''){
        this.kmtomile = (y / 0.621371).toString();
      }
      // if there is no value entered don't convert
      else if (x === '' && y === '')return
      else return
     }

     // define the convert from meter to inch function and vice versa
     convertmeterToinch(){
      var x = this.formgroup.get ('meterToinch')?.value; // x will carry the variable of the input meter to inch
      var y = this.formgroup.get ('inchTometer')?.value; // y will carry the variable of the input inch to meter
      // convert from meter to inch
      if (x !== '' && y === ''){
        this.intom = (x / 0.0254).toString();
      }
      // convert from inch to meter
      else if (x === '' && y !== ''){
        this.mtoin = (y * 0.0254).toString();
      }
      // if there is no value entered don't convert
      else if (x === '' && y === '')return
      else return
     }

     // define the convert from meter to feet and vice versa function
     convertmeterTofeet(){
      var x = this.formgroup.get('meterTofeet')?.value; // x will carry the variable of the input meter to feet
      var y = this.formgroup.get('feetTometer')?.value; // y will carry the variable of the input feet to meter
      //convert from meter to feet 
      if (x !== '' && y === ''){
        this.feettom = (x * 3.28084).toString();
      }
      //convert from feet to meter
      else if (x === '' && y !== ''){
        this.mtofeet = (y / 3.28084).toString();
      }
      // if there is no value entered don't convert
      else if (x === '' && y === '')return
      else return
     }


     // the convert function that will call all functions in one time
     convert(){
      this.convertkiloTomile();
      this.convertkilometerTometer();
      this.convertmeterTofeet();
      this.convertmeterToinch();
     }


     // the reset function that will reinitialize all input fields
     reset(){
       this.formgroup.reset();
     }

  


}
