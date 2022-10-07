import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  public htomin = ''; // variable will carry the hour to minute input value
  public mintoh = ''; // variable will carry the minute to hour input value
  public htosec = ''; // variabel will carry the hour to second input value
  public sectoh = ''; // variable will carry the second to hour input value
  public mintosec = ''; // variable will carry the minute to second input value
  public sectomin = ''; // variable will carry the second to minute input value
  public sectomili = ''; // variable will carry the second to milli scond input value
  public militosec = ''; // variable will carry the mili to second input value

  public formgroup !: FormGroup;
  constructor(public formbuilder : FormBuilder) { }

  ngOnInit(): void {
    this.formgroup = this.formbuilder.group({
      hourTominute :'',
      minuteTohour : '',
      hourTosecond : '',
      secondTohour : '',
      minuteTosecond : '',
      secondTominute : '',
      secondTomili : '',
      miliTosecond : ''
    })
  }

  // define the convert from hout to minute function
  converthoutTominute(){
    var x = this.formgroup.get('hourTominute')?.value; // x will carry the hour to minute input value
    var y = this.formgroup.get('minuteTohour')?.value; // y will carry the minute to hour input value
    // convert form hout to minute
    if (x !== '' && y ===''){
      this.mintoh = (x * 60).toString();
    }
    // convert from minute to hour
    else if (x ==='' && y !== ''){
      this.htomin = (y / 60).toString();
    }
    // if there is no value don't convert
    else if (x === '' && y === '')return
    else return
  }

  // define the convert from hour to second function
  converthoutTosecond(){
    var x = this.formgroup.get('hourTosecond')?.value; // x will carry the hour to second input value
    var y = this.formgroup.get('secondTohour')?.value; // y will carry the second to hour input value
    // convert from hour to second
    if (x !== '' && y === ''){
      this.sectoh = (x * 3600).toString();
    }
    // convert from second to hour
    else if (x === '' && y !== ''){
      this.htosec = (y / 3600).toString();
    }
    // if there is no value don't convert
    else if (x === '' && y === '')return
    else return 
  }
   
  // define convert from minute to second function
  convertminuteTosec(){
    var x = this.formgroup.get('minuteTosecond')?.value; // x will carry the minute to second input value
    var y = this.formgroup.get('secondTominute')?.value; // y will carry the second to minute input value
    // convert from minute to second
    if (x !== '' && y ===''){
      this.sectomin = (x * 60).toString();
    }
    // convert from second to minute 
    else if (x === '' && y !== ''){
      this.mintosec = (y / 60).toString()
    }
    // if there is no value don't convert
    else if (x === '' && y === '') return
    else return
  }

  // define the convert from second to millisecond
  convertsecondTomilli(){
    var x = this.formgroup.get('secondTomili')?.value; // x will carry the second to milli second input value
    var y = this.formgroup.get('miliTosecond')?.value; // y will carry the mili second to second input value
    // convert from second to milli second
    if (x !== '' && y ===''){
      this.militosec = (x * 60).toString();
    }
    // convert from second to minute 
    else if (x === '' && y !== ''){
      this.sectomili = (y / 60).toString()
    }
    // if there is no value don't convert
    else if (x === '' && y === '') return
    else return
  }
}
