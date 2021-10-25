import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  url: string;


  constructor(
    private http: HttpClient
  ) { }

  downloadFile(): Observable<any>{
    return this.http.get(this.url, { responseType: 'blob'})
  }
  


}
