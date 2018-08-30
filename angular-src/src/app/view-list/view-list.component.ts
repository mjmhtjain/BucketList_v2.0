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
  private priorityList: any = [];
  private priorityMap : any;

  constructor(private listServ: ListService) {

  }

  ngOnInit() {
    this.loadPriorities();
    this.loadLists();
  }

  public loadPriorities(){
    this.listServ.getPriorities().subscribe(res => {
      if(res['success']){
        // console.log( res['object']);
        this.priorityList = res['object'];
        this.priorityList.forEach(element => {
          this.priorityMap[element._id] = element;
        })
      }
    }, err=>{

    });
  }

  public loadLists() {

    //Get all lists from server and update the lists property
    this.listServ.getAllLists().subscribe(res => {
      // this.lists = res.lists;
      let bucketList = res.lists;
      bucketList.forEach(element => {
        let objectId = element.category;
        if(this.priorityMap.hasOwnProperty(objectId)){
          element.category = this.priorityMap.objectId;
        }
      });
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
