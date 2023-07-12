import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Train } from './train';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  private baseUrl ="http://localhost:8081/findAllTrains";

  constructor(private http: HttpClient) { }

  getTrain(): Observable<Train[]>{
    return this.http.get<Train[]>(`${this.baseUrl}`);
  }

  private baseUrl1="http://localhost:8080/train/getall";
 


  getAllTrain(): Observable<Train[]> {
    return this.http.get<Train[]>(`${this.baseUrl1}`);
  }
  
  postTrain(trains:Train): Observable<Train[]>
  {
    return this.http.post<Train[]>("http://localhost:8080/train/addtrain",trains)
    
  }
  
  //get
 
  getTrains()
  {
    return this.http.get<any>("http://localhost:8080/train/getall").pipe(map((res:any)=>{
      return res;
    }))
  }

  //update
  updateTrain(train:any, t_id:string)
  {
    return this.http.put<any>("http://localhost:8080/train/update/"+t_id,train).pipe(map((res:any)=>{
      return res;
    }))
  }

  //delete
  deleteTrain(t_id:string)
  {
    return this.http.delete<any>("http://localhost:8080/train/delete/"+t_id).pipe(map((res:any)=>{
      return res;
    }))
  } 

  //search trains
  searchTrain(source:string, destination:string)
  {
    return this.http.get<any>("http://localhost:8080/search/"+source+"/"+destination);
  }
}
