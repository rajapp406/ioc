import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MushroomComponent } from './recepies/mushroom/mushroom.component';
import { OnionComponent } from './recepies/onion/onion.component';
import { TomatoComponent } from './recepies/tomato/tomato.component';
import { MasterLayoutComponent } from './master-layout/master-layout.component';
import { DefaultComponent } from './recepies/default/default.component';
import { PlaceHolderDirective } from './place-holder.directive';
import { NotesComponent } from './notes/notes.component';
import { TomatoFormComponent } from './forms/tomato-form/tomato-form.component';
import { OnionsFormComponent } from './forms/onions-form/onions-form.component';
import { MashroomFormComponent } from './forms/mashroom-form/mashroom-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MushroomComponent,
    OnionComponent,
    TomatoComponent,
    MasterLayoutComponent,
    DefaultComponent,
    PlaceHolderDirective,
    NotesComponent,
    TomatoFormComponent,
    OnionsFormComponent,
    MashroomFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
