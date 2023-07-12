import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from '../book.service';
import { Book } from '../book';
import Swal from 'sweetalert2';
import { JwtClientService } from '../jwt-client.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[] ;
  formValue!: FormGroup

  bookModelObject: Book = new Book;
  showAdd: boolean;
  showBtn: boolean;
  alltrainData: any;
  isLoggedIn=false;
  

  constructor(private formBuilder: FormBuilder,private bookservice:BookService,private service:JwtClientService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group(
      {
        pnr: [''],
        ticket_id: [''],
        no_of_seats: [''],
        source: [''],
        destination: [''],
        date:[''],
        price:[''],
        time: ['']
      }
    )
    //this.getSpecific();
    this.getBookingList();
    this.isLoggedIn=this.service.isLoggedIn();
    console.log(this.isLoggedIn);
  }


clickBookTrain()
{
  this.formValue.reset();
  this.showAdd=true;
  this.showBtn=false;
}

getBookingList()
{
  this.bookservice.getAllTicket().subscribe((book: Book[])=>
  {
    console.log(book);
    this.books= book;
  });
}

getSpecific(data:any)
{
  this.bookservice.getBooking(data.pnr).subscribe((book: Book[])=>
    {
      console.log(book);
      this.books=book;
    }
    
    );
}


//subscribe
addBooking() {
  this.bookModelObject.pnr=this.formValue.value.pnr;
  this.bookModelObject.ticket_id= this.formValue.value.ticket_id;
  this.bookModelObject.no_of_seats=this.formValue.value.no_of_seats;
  this.bookModelObject.source = this.formValue.value.source;
  this.bookModelObject.destination = this.formValue.value.destination;
  this.bookModelObject.time=this.formValue.value.time;
  this.bookModelObject.date=this.formValue.value.date;
  this.bookModelObject.price=this.formValue.value.price;

  

  this.bookservice.postBooking(this.bookModelObject).subscribe((res:any[]) => {
    console.log(res);
   // alert("New record Added");
   Swal.fire(

    "Record Added",

    "Successfully",

    "success"

  )
    this.formValue.reset();
    this.getBookingList();
  }
    , err => {
     // alert("Error Occured");
     Swal.fire(

      "CHECK ONCE"

    )
      this.getBookingList();
    })
}

/* getCurrentPurchase() {
  return this.bookservice.postBooking(books:Book)
} */


//delete
deleteBookingList(data:any)
{

  this.bookservice.deleteBooking(data.pnr).subscribe((res:any[])=>{
    console.log(res);
    //alert("Record Deleted");
   
    Swal.fire({

      title: "Are you sure?",
  
      text: "You want to delete",
  
      icon: "warning",
  
      showCancelButton: true,
  
      confirmButtonColor: "#3085d6",
  
      cancelButtonColor: "#d33",
  
      confirmButtonText: "Yes, delete it!"
  
    })  
    this.formValue.reset();
    this.getBookingList();
  })
  if(confirm("delete the record of id "+data.pnr))
  {
    console.log("delete");
    this.getBookingList();
  }
}



//edit
onEditBook(data:any)
{
  
  this.bookModelObject.pnr = data.pnr;
  //this.formValue.controls['PNR'].setValue(data.pnr);
  this.formValue.controls['ticket_id'].setValue(data.ticket_id);
  this.formValue.controls['no_of_seats'].setValue(data.no_of_seats);
  this.formValue.controls['source'].setValue(data.source);
  this.formValue.controls['destination'].setValue(data.destination);
  this.formValue.controls['time'].setValue(data.time);
  this.formValue.controls['date'].setValue(data.date);
  this.formValue.controls['prince'].setValue(data.prince);

}

updateBookingList()
{
  this.bookModelObject.pnr=this.formValue.value.pnr;
  this.bookModelObject.ticket_id=this.formValue.value.ticket_id;
  this.bookModelObject.no_of_seats=this.formValue.value.no_of_seats;
  this.bookModelObject.source = this.formValue.value.source;
  this.bookModelObject.destination = this.formValue.value.destination;
  this.bookModelObject.time=this.formValue.value.time;
  this.bookModelObject.date=this.formValue.value.date;
  this.bookModelObject.price=this.formValue.value.price;
 
  console.log(this.bookModelObject)

  this.bookservice.updateBooking(this.bookModelObject, this.bookModelObject.pnr)
  .subscribe((res:any[])=>{
    //alert("Record Updated");
    Swal.fire(

      "Record updated",
  
      "Successfully",
  
      "success"
  
    )
    this.getBookingList();
  });
}
  

}
