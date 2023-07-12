import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TrainService } from '../train.service';
import { Train } from '../train';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  trains: Train[] ;
  formValue!: FormGroup

  trainModelObject: Train = new Train;
  showAdd: boolean;
  showBtn: boolean;
  alltrainData: any;;
  

  constructor(private formBuilder: FormBuilder,private trainService:TrainService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group(
      {
        t_id: [''],
        t_name: [''],
        source: [''],
        destination: [''],
        price:['']
      }
    )
    this.getTrains();
  }


clickAddTrain()
{
  this.formValue.reset();
  this.showAdd=true;
  this.showBtn=false;
}

getTrains()
{
  this.trainService.getAllTrain().subscribe((train: Train[])=>
  {
    console.log(train);
    this.trains= train;
  });
}

//subscribe
addTrain() {
  this.trainModelObject.t_id=this.formValue.value.t_id;
  this.trainModelObject.t_name= this.formValue.value.t_name;
  this.trainModelObject.source = this.formValue.value.source;
  this.trainModelObject.destination = this.formValue.value.destination;
  this.trainModelObject.price=this.formValue.value.price;

  

  this.trainService.postTrain(this.trainModelObject).subscribe((res:any[]) => {
    console.log(res);
   // alert("New record Added");
   Swal.fire(

    "Record Added",

    "Successfully",

    "success"

  )
    this.formValue.reset();
    this.getTrains();
  }
    , err => {
      //alert("Error Occured");
      Swal.fire(

        "CHECK ONCE"

      )
      this.getTrains();
    })
}




//delete
deleteTrain(data:any)
{
this.trainService.deleteTrain(data.t_id).subscribe((res:any[])=>{
    console.log(res);
}, err =>{
  Swal.fire({

    title: "Are you sure?",

    text: "You want to delete",

    icon: "warning",

    showCancelButton: true,

    confirmButtonColor: "#3085d6",

    cancelButtonColor: "#d33",

    confirmButtonText: "Yes, delete it!"

  })  
    this.getTrains();
  }
  /* if(confirm("delete the record of id "+data.t_id))
  {
    console.log("delete");
    this.getTrains();
  } */
)
}




//edit
onEditTrain(data:any)
{
  
  this.trainModelObject.t_id = data.t_id;
  this.formValue.controls['t_name'].setValue(data.t_name);
  this.formValue.controls['source'].setValue(data.source);
  this.formValue.controls['destination'].setValue(data.destination);
  this.formValue.controls['price'].setValue(data.price);

}

updateTrain()
{
  this.trainModelObject.t_id=this.formValue.value.t_id;
  this.trainModelObject.t_name= this.formValue.value.t_name;
  this.trainModelObject.source = this.formValue.value.source;
  this.trainModelObject.destination = this.formValue.value.destination;
  this.trainModelObject.price=this.formValue.value.price;
 
  console.log(this.trainModelObject)

  this.trainService.updateTrain(this.trainModelObject, this.trainModelObject.t_id)
  .subscribe((res:any[])=>{
    //alert("Record Updated");
    Swal.fire(

      "Record Updated",

      "Successfully",

      "success"

    )
    this.getTrains();
  });
}
  
  
  

}
