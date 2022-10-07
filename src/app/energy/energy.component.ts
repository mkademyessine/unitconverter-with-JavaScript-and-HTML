import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.css']
})
export class EnergyComponent implements OnInit {

  public jouletocal = ''; // variabel will carry the joule to calorie input value
  public caltojoule = ''; // vaiable will carry the calorie to jouel input value
  public jouletokw = ''; // vaiable will carry the joule to kilowatt input value
  public kwtojoule = ''; // vaiable will carry the kilowatt to joule input value

  public formgroup !: FormGroup;

  constructor(public formbuilder : FormBuilder) { }

  ngOnInit(): void {
    this.formgroup = this.formbuilder.group({
      jouleTocalories :'',
      caloriesTojoule :'',
      jouleTowatt : '',
      wattTojoule :''
    })
  }

  // define the convert from joule to calorie function
  convertjouleTocal(){
    var x = this.formgroup.get('jouletocal')?.value; // x will carry the joule to calorie input value
    var y = this.formgroup.get('caltojoule')?.value; // y will carry the calorie to joule input value
    // convert from joule to calories
    if (x !== '' && y ===''){
      this.caltojoule =(x / 4184).toString();
    }
    // convert from calorie to joule
    else if (x === '' && y !== ''){
      this.caltojoule =(y /  4184).toString();
    }
    // if there is no value don't covnert
    else if (x === '' && y ==='')return
    else return
  }

  //define the conert from  joule to kilowatt function
  convertjouleTokilowatt(){
    var x = this.formgroup.get('jouleTowatt')?.value; // x will carry the value of joule to kilowatt input
    var y = this.formgroup.get('wattTojoule')?.value; // y will carry the value of watt to kilo watt input 
    // convert from joule to kilowatt/hour 
    if (x !== '' &&  y ===''){
      this.kwtojoule = (x / 3600000).toString();
    }
    // convert from kilowatt/hour to joule
    else if (x === '' && y !== ''){
      this.jouletokw = (y / 3600000).toString();
    }
    // if there is no value don't convert
    else if (x ==='' && y ==='')return
    else return
  }

  // define the convert function to call all convert functions
  convert(){
    this.convertjouleTocal();
    this.convertjouleTokilowatt();
  }

  // define the reset function to reset all input fields
  reset(){
    this.formgroup.reset();
  }

}
