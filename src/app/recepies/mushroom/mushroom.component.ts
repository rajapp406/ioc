import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-mushroom',
  templateUrl: './mushroom.component.html',
  styleUrls: ['./mushroom.component.scss']
})
export class MushroomComponent implements OnInit {
  data: any = {}
  constructor(public testService: TestService) { }

  ngOnInit(): void {
    this.data = this.testService.data;
  }
  emitChange(e: any) {
    this.data = e.target.value;
  }
  changeToggle(e: any){
    this.testService.data.dynamicData.next(e.checked)
    console.log(e.checked)
  }
}
