import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {
  isTokenExpired() {
    throw new Error('Method not implemented.');
  }

  url="http://localhost:8080"
  constructor(private httpClient: HttpClient,private router: Router) { }


authenticateClient(authenticationRequest:any)
{
  return this.httpClient.post<string>(`${this.url}/auth`,authenticationRequest, {  responseType: 'text' as 'json' })
}


subscribeClient(authenticationRequest:any)
{
  return this.httpClient.post<string>(`${this.url}/subs`,authenticationRequest, {  responseType: 'text' as 'json' })
}

 /* public authenticateClient(authenticationRequest:any) {
    return this.httpClient.post<string>("http://localhost:9091/auth", authenticationRequest, {  responseType: 'text' as 'json' });
  }*/


 /* public testingToken(generatedToken:any) {
    let tokenStr = 'Bearer ' + generatedToken;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.httpClient.get<string>("http://localhost:9091/token", {headers, responseType: 'text' as 'json' });
  }*/

  loginUser(token:any)
  {
     localStorage.setItem("token",token)
     return true;
  }

  

  isLoggedIn()
  {
   var token= localStorage.getItem('token');
    if(token===undefined || token==='' || token===null || token==='Error during authentication')
    {
      return false;

    }else
    {
      return true;
    }
  }

  logout()
  {
    /* localStorage.removeItem('token') */
     /*return true; */
    /* this.userSub.next(null); */
    this.router.navigate(['/login']); 
    /* localStorage.removeItem('userData'); */
    window.localStorage.clear();
  }


  //for getting token
  getToken()
  {
    return localStorage.getItem('token');
    
  }



}