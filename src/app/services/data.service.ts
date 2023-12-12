import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


export class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  apiBaseUrl: string = environment.baseurl;

  constructor(private http: HttpClient) {
  }

  sendGETRequest(url: string, Headers?: any, Params?: any) : Observable<any>{
      var generatedURL = this.generateAPIModuleURL(url);
      var headers: any = {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'};
      var params: any = {};
      if(Headers != null){
        Object.entries(Headers).forEach(([key, value]) => {
          headers[key] = value;
        });
      }
      if(Params != null){
        Object.entries(Params).forEach(([key, value]) => {
          params[key] = value;
        });
      }
      
      return this.http.get(generatedURL, {'headers':headers, 'params':params})
    
  }

  sendPUTRequest(url: string, Headers?: any, Params?: any) : Observable<any>{
    var generatedURL = this.generateAPIModuleURL(url);
    var headers: any = {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'};
    var params: any = {};
    if(Headers != null){
      Object.entries(Headers).forEach(([key, value]) => {
        headers[key] = value;
      });
    }
    if(Params != null){
      Object.entries(Params).forEach(([key, value]) => {
        params[key] = value;
      });
    }
    
    return this.http.put(generatedURL, {'headers':headers, 'params':params})
  }

  sendDELETERequest(url: string, Headers?: any, Params?: any) : Observable<any>{
    var generatedURL = this.generateAPIModuleURL(url);
    var headers: any = {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'};
    var params: any = {};
    if(Headers != null){
      Object.entries(Headers).forEach(([key, value]) => {
        headers[key] = value;
      });
    }
    if(Params != null){
      Object.entries(Params).forEach(([key, value]) => {
        params[key] = value;
      });
    }
    
    return this.http.delete(generatedURL, {'headers':headers, 'params':params})
  }

  sendPOSTRequest(url: string, Body: any, Headers?: any, Params?: any, isMultiPartRequest?:boolean) : Observable<any> {
    var generatedURL = this.generateAPIModuleURL(url);
    var headers: any = {};
    var params: any = {};
    var body;

    if(isMultiPartRequest != null){
      headers = {'Access-Control-Allow-Origin': '*'};
      body = Body;
    }else{
      headers = {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'};
      body = JSON.stringify(Body);
    }

    if(Headers != null){
      Object.entries(Headers).forEach(([key, value]) => {
        headers[key] = value;
      });
    }

    if(Params != null){
      Object.entries(Params).forEach(([key, value]) => {
        params[key] = value;
      });
    }

    return this.http.post<any>(generatedURL, body, {'headers':headers, 'params':params});
  
  }


  generateAPIModuleURL(url: string) {
    return `${this.apiBaseUrl}${url}`;
  }

}

  
  
