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
  
  // private priorityMap : any = {};

  constructor(private listServ: ListService) {

  }

  ngOnInit() {
    // this.loadPriorities();
    this.loadLists();
  }

  public loadLists() {

    //Get all lists from server and update the lists property
    this.listServ.getAllLists().subscribe(res => {
      let bucketList = res.lists;
      // console.log(bucketList);
      this.lists = bucketList;
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
