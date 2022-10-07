import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-speed',
  templateUrl: './speed.component.html',
  styleUrls: ['./speed.component.css']
})
export class SpeedComponent implements OnInit {

  public kmtoh = ''; // variable will carry the kilometer to hour input value
  public mtosec =''; // variable will carry the meter to second input value
  public kmtomile =''; // variable will carry the kilometer to mile input value
  public miletokm =''; // variable will carry the mile to kilometer input value
  public miletom =''; // variable will carry the mile to meter input value
  public mtomile =''; // variabel will carry the meter to mile input value
  public kmtofeet =''; // variable will carry the kilometer to feet input value
  public feettokm = ''; // variable will carry the feet to kilometer input value


  public formgroup !: FormGroup;

  constructor(public formbuilder : FormBuilder) { }

  ngOnInit(): void {
    this.formgroup = this.formbuilder.group({
      kiloTohour :'',
      meterTosecond :'',
      kiloTomile : '',
      mileTokilo :'',
      mileTosecond :'',
      secondTomile :'',
      kiloTofeet:'',
      feetTosecond :''
    })
  }

  // define the convert from km/hour to meter/second function
  convertkilohoutTometersec(){
    var x =  this.formgroup.get('kiloTohour')?.value; // x will carry the value of kilometer/hour input value
    var y = this.formgroup.get('meterTosecond')?.value; // y will carry the value of meter/second input value
    // convert from kilometer /hout to meter / second
    if (x !== '' && y ===''){
      this.mtosec = (x / 3.6).toString();
    }
    //convert from meter/second to kilometer /hour
    else if (x ==='' && y !==''){
      this.kmtoh = (y *3.6).toString();
    }
    // if there is no value don't convert
    else if (x === '' && y === '')return
    else return
  }

  // define the convert from 
  convertkilohourTomilehour(){
    var x = this.formgroup.get('mileTokilo')?.value; // x will carry the value of the kilo/hour input value
    var y =this.formgroup.get('mileTosecond')?.value; // y will carry the value of the mile /hour input value
    // convert from kilometer/hour to mile/hour
    if (x !=='' && y ===''){
      this.kmtomile = (x / 1.609).toString();
    }
    // convert from mile/hour to kilometer/hour
    else if (x === '' && y !== ''){
      this.miletokm = (y * 1.609).toString();
    }
    // if there is no value don't convert
    else if (x === '' && y === '')return
    else return
  }

  // define the convert from mile to meter
  convertmiletometer(){
    var x = this.formgroup.get('mileTosecond')?.value; // variable will carry the mile hour input value
    var y = this.formgroup.get('secondTomile')?.value; // variable will carry the meter second input value
    // convert from mile hour to meter second
    if (x !== '' && y === ''){
      this.mtomile =(x /  2.237).toString();
    }
    // convert from meter second to mile hour
    else if (x === '' && y !== ''){
      this.miletom =( y *  2.237).toString();
    }
    // if there is no value don't convert
    else if (x === '' && y ==='')return
    else return
  }

  // define the convert from kilometer to feet 
  convertkilometerTofeet(){
    var x = this.formgroup.get('kiloTofeet')?.value; // variable will carry the kilometer/hour input value
    var y = this.formgroup.get('feetTosecond')?.value; // variable will carry the feet/second input value
    // convert from mile hour to meter second
    if (x !== '' && y === ''){
      this.feettokm =(x /  1.097).toString();
    }
    // convert from meter second to mile hour
    else if (x === '' && y !== ''){
      this.kmtofeet =( y *  1.097).toString();
    }
    // if there is no value don't convert
    else if (x === '' && y ==='')return
    else return
  }

  // define the convert function that will call convert functions
  convert(){
    this.convertkilohourTomilehour();
    this.convertkilohoutTometersec();
    this.convertkilometerTofeet();
    this.convertmiletometer();
  }

  // define the reset function that reset all input fields
  reset(){
    this.formgroup.reset();
  }

  

}
