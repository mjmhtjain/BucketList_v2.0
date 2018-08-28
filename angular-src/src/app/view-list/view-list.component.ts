import { Component, OnInit } from '@angular/core';
import { List } from '../models/List';
import { ListService } from '../list.service';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {

  private lists: any = [];

  constructor(private listServ: ListService) {

  }

  ngOnInit() {
    this.loadLists();
  }

  public loadLists() {

    //Get all lists from server and update the lists property
    this.listServ.getAllLists().subscribe(res => {
      this.lists = res.lists;
    }, err => {

    });
  }

  public deleteList(list: List) {
    this.listServ.deleteList(list._id).subscribe(
      response => {
        this.lists = this.lists.filter(lists => lists !== list);
      }, err => {

      });
  }

  public onAddList(newList) {
    this.lists = this.lists.concat(newList);
  }


}
