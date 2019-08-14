import { Injectable } from '@angular/core'

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpC: HttpClient) { }

  post(data: Object, path: string) {
    let formData = new FormData()
    let url = environment.api_server+path;
    for ( var key in data ) {
      if(data[key] instanceof Array) {
        data[key].forEach(e => {
          formData.append(key+'[]',e)
        })
      } else {
        formData.append(key, data[key]);
      }
    }
    return this.httpC.post(url, data)
  }

  get(path: string,data:Object = {}) {
    let QueryString = Object.keys(data).map(key => key + '=' + data[key]).join('&');
    let url = '';
    if(data === {}) {
      url = environment.api_server+path;
    } else {
      url = environment.api_server+path+'?'+QueryString;
    }
    return this.httpC.get(url)
  }

}
