import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DistanceComponent } from './distance/distance.component';
import { AreaComponent } from './area/area.component';
import { VolumeComponent } from './volume/volume.component';
import { TimeComponent } from './time/time.component';
import { SpeedComponent } from './speed/speed.component';
import { WeightComponent } from './weight/weight.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { PowerComponent } from './power/power.component';
import { EnergyComponent } from './energy/energy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


/** angular material modules importations */
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    DistanceComponent,
    AreaComponent,
    VolumeComponent,
    TimeComponent,
    SpeedComponent,
    WeightComponent,
    TemperatureComponent,
    PowerComponent,
    EnergyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
