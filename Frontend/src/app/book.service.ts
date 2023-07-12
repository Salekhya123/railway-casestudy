import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  private baseUrl1="http://localhost:8082/AllTrains";

  getAllTrain(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl1}`);
  }
  
  postBooking(books:Book): Observable<Book[]>
  {
    return this.http.post<Book[]>("http://localhost:8082/addTicket",books)
    
  }
  
  //get
 
  getAllTicket()
  {
    return this.http.get<any>("http://localhost:8082/AllTickets").pipe(map((res:any)=>{
      return res;
    }))
  }

  //get by id
  getBooking(PNR:string){
    return this.http.get<any>("http://localhost:8082//AllTickets/"+PNR).pipe(map((res:any)=>{
      return res;
    }))
  }

  //update
  updateBooking(books:any, PNR:string)
  {
    return this.http.put<any>("http://localhost:8082/update/"+PNR,books).pipe(map((res:any)=>{
      return res;
    }))
  }

  //delete
  deleteBooking(PNR:string)
  {
    return this.http.delete<any>("http://localhost:8082/delete/"+PNR).pipe(map((res:any)=>{
      return res;
    }))
  } 
}
