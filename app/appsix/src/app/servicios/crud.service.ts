import { Injectable } from '@angular/core';
import { HttpClient,   HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CrudsService {
  isAuthenticate = false;

  private apiURL:  string = "https://localhost:44397/api/";
  
  
//--proxy-config proxy.conf.json
  constructor(private http : HttpClient) {
    
   }
   
  readonly ISLOGGEDKEY = 'islogged';
  readonly TOKENVALIDO = 'TOKEN';
  public urlUsuarioIntentaAcceder = '';

  public changeLoginStatusSubject = new Subject<boolean>();
  public changeLoginStatus$ = this.changeLoginStatusSubject.asObservable();
  public IdEmp:number = 3;



  public async ListarCliente(): Promise<any> { 
    let Headerss= new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set("Authorization", "Bearer vacio" );

    
    
    return await this.http.get<any>(this.apiURL + `clientes`,  {    
      headers: Headerss
    }).pipe(retry(3), catchError(this.handleError)).toPromise(); 
  };

  public async FiltrarIDCliente(id:number): Promise<any> { 
    let Headerss= new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set("Authorization", "Bearer vacio" );

    
    
    return await this.http.get<any>(this.apiURL + `clientes/${id}`,  {    
      headers: Headerss
    }).pipe(retry(3), catchError(this.handleError)).toPromise(); 
  };

 
 
  
  handleError(error:any) {
    let errorMessage = ''; 
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      if(error.status === 404){
        errorMessage = "Error 404 Se presento un problema con el consumo de la información \n POR FAVOR REPORTAR AL ADMINISTRADOR";
      }
      //errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      console.log(`Error Code: ${error.status}\nMessage: ${error.message}`)
        
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


}
