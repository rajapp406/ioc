import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-onion',
  templateUrl: './onion.component.html',
  styleUrls: ['./onion.component.scss']
})
export class OnionComponent implements OnInit {
  data: any = {}
  constructor(public testService: TestService) { }

  ngOnInit(): void {
    this.data = this.testService.data;
  }

}
