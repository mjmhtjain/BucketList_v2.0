import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { List } from '../models/List';
import { ListService } from '../list.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  constructor(private listServ: ListService) { }

  private newList: List;

  @Output() addList: EventEmitter<List> = new EventEmitter<List>();

  ngOnInit() {
    this.newList = {
      title: '',
      category: '',
      description: '',
      _id: ''

    };

    this.newList.category = 'High';
  };

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
