import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {

  books: Book[] ;
  formValue!: FormGroup

  bookModelObject: Book = new Book;
  showAdd: boolean;
  showBtn: boolean;
  alltrainData: any;;
  

  constructor(private formBuilder: FormBuilder,private bookservice:BookService) { }

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
    this.getBookingList();
  }

getBookingList()
{
  this.bookservice.getAllTicket().subscribe((book: Book[])=>
  {
    console.log(book);
    this.books= book;
  });
}

  

}
