import { Component, OnInit } from '@angular/core';
import { DistanceComponent } from './distance/distance.component';

import {MatDialog} from '@angular/material/dialog';
import { AreaComponent } from './area/area.component';
import { VolumeComponent } from './volume/volume.component';
import { TimeComponent } from './time/time.component';
import { SpeedComponent } from './speed/speed.component';
import { WeightComponent } from './weight/weight.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { PowerComponent } from './power/power.component';
import { EnergyComponent } from './energy/energy.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'unitconverter';

  constructor(public dialog : MatDialog){}
  ngOnInit(){

  }
 /**** create open distance dialog function */
  open_distance(){
      this.dialog.open(DistanceComponent,{
        height:'90vh',
        width:'600px',
      });
    }    
  /*** create  open area  dialog function */
  open_area(){
    this.dialog.open(AreaComponent,{
      height:'90vh',
      width:'600px',
    });
  } 
 
  /***** create open dialog volume function */
  open_volume(){
    this.dialog.open(VolumeComponent,{
      height:'90vh',
      width:'600px',
    });
  }
  
  /***** create open dialog time function */
  open_time(){
    this.dialog.open(TimeComponent,{
      height:'90vh',
      width:'600px',
    });
  }
 
/***** create open dialog speed function */
open_speed(){
  this.dialog.open(SpeedComponent,{
    height:'90vh',
    width:'600px',
  });
}

/***** create open dialog weight function */
open_weight(){
  this.dialog.open(WeightComponent,{
    height:'90vh',
    width:'600px',
  });
}
  
/***** create open dialog tempeture function */
open_temmpeture(){
  this.dialog.open(TemperatureComponent,{
    height:'90vh',
    width:'600px',
  });
}

/***** create open dialog power function */
open_power(){
  this.dialog.open(PowerComponent,{
    height:'90vh',
    width:'600px',
  });
}

/***** create open dialog energy function */
open_energy(){
  this.dialog.open(EnergyComponent,{
    height:'90vh',
    width:'600px',
  });
}

}
