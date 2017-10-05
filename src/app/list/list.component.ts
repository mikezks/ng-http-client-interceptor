import { DataService } from '../shared/data/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public list$: Observable<Array<string>>;
  
  constructor(private data: DataService) { 
    this.list$ = this.data.getData$();
  } 

  ngOnInit() {
  }

}
