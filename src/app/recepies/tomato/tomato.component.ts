import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-tomato',
  templateUrl: './tomato.component.html',
  styleUrls: ['./tomato.component.scss']
})
export class TomatoComponent implements OnInit {
data: any = {}
  constructor(public testService: TestService) { }

  ngOnInit(): void {
    this.data = this.testService.data;
  }

}
