import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  testSub = new BehaviorSubject(false);
data: any = { 
  a: 12, 
  b: 2,
  dynamicData: new BehaviorSubject(false)
}
  constructor() { }
}
