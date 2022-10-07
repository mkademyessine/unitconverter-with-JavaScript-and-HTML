import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {

  public wtojoule = ''; // variable will carry the watt to joule input value
  public jouletow = ''; // variable will carry the joule to watt input value
  public wtojoulemin = ''; // variable will carry the watt to joule minute input value
  public joulemintow = ''; // variable will carry the joule minute to watt input value
  public wtojouleh =''; // variable will carry the watt to joule hour input value
  public joulehtow =''; //variable will carry the joule hour to wat input value

  public formgroup !: FormGroup;

  constructor(public formbuilder :FormBuilder) { }

  ngOnInit(): void {
    this.formgroup =  this.formbuilder.group({
      wattTojoulesecond :'',
      joulesecondTowatt :'',
      wattTojouleminute :'',
      jouleminuteTowatt :'',
      wattTojoulehour :'',
      joulehourTowatt :'' 
    })
  }

  // define the convet from watt to joule/second function
  convertwattTojoulesec(){
    var x = this.formgroup.get('wattTojoulesecond')?.value; // x will carry the watt to joule input value
    var y = this.formgroup.get('joulesecondTowatt')?.value; // y will carry the joule to watt input value
    // convert from watt to joule
    if (x !== '' && y ===''){
      this.jouletow = (x * 1).toString();
    }
    // convert from joule to watt
    else if (x ==='' && y !== ''){
      this.wtojoule = (y * 1).toString();
    }
    // if there is no value don't convert
    else if  (x === '' && y === '')return
    else return
  }

  // define the convert from joule/minute 
  convertwattTojoulemin(){
    var x = this.formgroup.get('wattTojouleminute')?.value; // x will carry the watt to joule minute input value
    var y = this.formgroup.get('jouleminuteTowatt')?.value; // y will carry the joule minute to watt input value
    // convert from watt to joule minute
    if (x !== '' && y === ''){
      this.wtojoulemin =(x * 60).toString();
    }
    // convert from joule minute to watt
    else if (x ==='' && y !== ''){
      this.joulemintow = ( y / 60).toString();
    }
    // if there is no value don't convert
    else if (x === '' && y === '')return
    else return
  }

  // define the convert from watt to joule hour function
  convertwattTojoulehour(){
    var x = this.formgroup.get('wattTojoulehour')?.value; // x will carry the watt to joule hour input value
    var y = this.formgroup.get('joulehourTowatt')?.value; // y will carry the joule hour to watt input value
    // convert from watt to joule/hour
    if (x !== '' && y ===''){
      this.joulehtow = (x * 3600).toString();
    }
    // convert from joule hour to watt
    else if (x === '' && y !== ''){
      this.wtojouleh =(y / 3600).toString();
    }
    // if there is no value don't convert
    else if (x === '' && y === '')return
    else return
  }

  // define the convert function that call all convert functions
  convert(){
    this.convertwattTojoulehour();
    this.convertwattTojoulemin();
    this.convertwattTojoulesec();
  }

  // define the reset function to reset all input fields
  reset(){
    this.formgroup.reset();
  }

}
