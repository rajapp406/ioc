import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MainService {
private serveToppings$ = new BehaviorSubject<any>(null);
 serveToppingsAbs = this.serveToppings$.asObservable();
  constructor() { }

  serveToppings(topping:string){
    console.log(topping)
    this.serveToppings$.next(topping)
  }
}
