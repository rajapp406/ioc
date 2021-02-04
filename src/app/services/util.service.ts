import { Injectable } from '@angular/core';
import { DefaultComponent } from '../recepies/default/default.component';
import { MushroomComponent } from '../recepies/mushroom/mushroom.component';
import { OnionComponent } from '../recepies/onion/onion.component';
import { TomatoComponent } from '../recepies/tomato/tomato.component';
@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

   mapTopping(topping: string = 'Tomato'){
    let component: any = DefaultComponent;
    switch(topping){
      case 'Mushroom':
        component =  MushroomComponent;
      break;
      case 'Onion':
          component =  OnionComponent;
      break;
      case 'Tomato':
        component =  TomatoComponent;
      break;
      default:
        component = DefaultComponent;
      break;
    }

    return { component, data: {
      a: 1
    } }
  }
}
