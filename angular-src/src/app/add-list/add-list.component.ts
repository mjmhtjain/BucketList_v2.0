import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { List } from '../models/List';
import { ListService } from '../list.service';
import { Priority } from '../models/PriorityModel';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  constructor(private listServ: ListService) { }

  private newList: List;
  private priorityList: Priority[] = [];


  @Output() addList: EventEmitter<List> = new EventEmitter<List>();

  ngOnInit() {
    // this.newList = {
    //   title: '',
    //   category: '',
    //   description: '',
    //   _id: ''

    // };

    this.loadPriorities((priority: Priority) => {
      this.newList['priority'] = priority;
    });

  };

  public loadPriorities(callback) {
    this.listServ.getPriorities().subscribe(res => {
      if (res['success']) {
        console.log(res['object']);
        this.priorityList = res['object'];
        callback(this.priorityList[0]);
      }
    }, err => {

    });
  }

  public onSubmit() {
    this.listServ.addList(this.newList).subscribe(
      response => {
        // console.log(response);
        if (response['success'] == true) {
          this.addList.emit(response['object']);
        }
        //If success, update the view-list component
      }
    );

  }
}
