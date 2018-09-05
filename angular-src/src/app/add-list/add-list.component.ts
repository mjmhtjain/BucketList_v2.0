import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { List, ListClass } from '../models/List';
import { ListService } from '../list.service';
import { Priority } from '../models/PriorityModel';
// import { $ } from 'protractor';

declare var $: any;

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  constructor(private listServ: ListService) { }

  private newList: List = new ListClass();
  private priorityList: Priority[] = [];


  @Output() addList: EventEmitter<List> = new EventEmitter<List>();

  ngOnInit() {
    this.loadPriorities((priority: Priority) => {
      this.newList['priority'] = priority;
    });
  };

  public loadPriorities(callback) {
    this.listServ.getPriorities().subscribe(res => {
      if (res['success']) {
        // console.log(res['object']);
        this.priorityList = res['object'];
        callback(this.priorityList[0]);
      }
    }, err => {

    });
  }

  public onSubmit() {
    this.listServ.addList(this.newList).subscribe(
      response => {
        if (response['success'] == true) {
          this.addList.emit(response['object']);
          this.resetFormData();
          this.hideModal();
        }
      }
    );
  }

  hideModal(){
    // document.getElementById('exampleModal').modal('hide');
    $("#exampleModal").modal('hide');
  }

  resetFormData() {
    this.newList = new ListClass();
    this.newList['priority'] = this.priorityList[0];
  }
}
