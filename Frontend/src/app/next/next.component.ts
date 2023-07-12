import { Component, OnInit } from '@angular/core';
import { JwtClientService } from '../jwt-client.service';
import { Train } from '../train';
import { TrainService } from '../train.service';
import { SelectedRowDataServiceService } from '../selected-row-data-service.service';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit {

   trains: Train[] ;
   searchText:any;
   isLoggedIn=false;
 
  constructor(private trainService:TrainService,private service:JwtClientService,private selectedRowDataService: SelectedRowDataServiceService ) { }

  ngOnInit() {
    this.trainService.getTrain().subscribe((data: Train[])=>{
      console.log(data);
     this.trains=data;
    });
    this.isLoggedIn=this.service.isLoggedIn();
    console.log(this.isLoggedIn);
  }

  selectRow(train: Train) {
    this.selectedRowDataService.setSelectedRowData(train);
  }
  

 
}