import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TestService } from '../services/test.service';
import {takeUntil} from 'rxjs/operators'
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
onDestroy: any = new Subject();
showNotes: boolean = false;
  constructor(public testService: TestService) { }

  ngOnInit(): void {
    this.testService.data.dynamicData.pipe(takeUntil(this.onDestroy)).subscribe(
      (data: any) => this.showNotes = data
    )
    console.log("hello notes!")
  }
ngOnDestroy(){
this.onDestroy.next();
this.onDestroy.complete();
}
}
