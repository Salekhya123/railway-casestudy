import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from '../book.service';
import { Book } from '../book';
import Swal from 'sweetalert2';
import { JwtClientService } from '../jwt-client.service';
import { SelectedRowDataServiceService } from '../selected-row-data-service.service';
import { Train } from '../train';



@Component({
  selector: 'app-formbook',
  templateUrl: './formbook.component.html',
  styleUrls: ['./formbook.component.css']
})
export class FormbookComponent implements OnInit {
  books: Book[] ;
  formValue!: FormGroup

  bookModelObject: Book = new Book;
  showAdd: boolean;
  showBtn: boolean;
  alltrainData: any;
  selectedRowData: Train;
  isLoggedIn=false;
  

  constructor(private formBuilder: FormBuilder,private bookservice:BookService,private service: JwtClientService,private selectedRowDataService: SelectedRowDataServiceService) {
    this.selectedRowData = this.selectedRowDataService.getSelectedRowData();
    
   }

  makePayment(amount: any) {    const paymentHandler = (<any>window).StripeCheckout.configure({      key:        'pk_test_51MetBxSCStUPrXPa1BmciiC1Y6nDsMRWBBI4f4NUK3GgeYTIQO39HtSlvTmPZnYhJeRrXQzWpwpJil1wwpgNNRFu001bRIuGxh',       locale: 'auto',      token: function (stripeToken: any) {        console.log(stripeToken.card);        alert('Stripe token generated!');      },    });     paymentHandler.open({      name: 'CouponBuddy',      description: 'Selected Products Added',      amount: amount * 100,    });  }  invokeStripe() {    if (!window.document.getElementById('stripe-script')) {      const script = window.document.createElement('script');      script.id = 'stripe-script';      script.type = 'text/javascript';      script.src = 'https://checkout.stripe.com/checkout.js';      window.document.body.appendChild(script);    }  }


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
    this.isLoggedIn=this.service.isLoggedIn();
    console.log(this.isLoggedIn);
    
  
  }

  clickBookTrain()
  {
    this.formValue.reset();
    this.showAdd=true;
    this.showBtn=false;
  }


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
     
    
    }
      , err => {
        //alert("Added");
        Swal.fire(

          "CHECK ONCE"
  
        )
       
      })
  }

  onLogout(event: Event): void {
    event.preventDefault();
    this.service.logout();
  }
  

 
  
  
}
