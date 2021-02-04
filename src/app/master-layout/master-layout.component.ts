import { Component, ContentChild, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MainService } from '../services/main.service';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-master-layout',
  templateUrl: './master-layout.component.html',
  styleUrls: ['./master-layout.component.scss']
})
export class MasterLayoutComponent implements OnInit {
  toppings = new FormControl();
  data: any;
@ContentChild('form') myform : any;
  toppingList: string[] = ['Mushroom', 'Onion', 'Tomato'];

  constructor(
    private mainService: MainService,
    public testService: TestService
  ){}
  ngOnInit(){
    this.data = this.testService.data;
     this.toppings.valueChanges.subscribe((val) =>{
      console.log(val)
      this.mainService.serveToppings(val);
    }) 
  }
}
