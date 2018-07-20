import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SongDDetails } from './song-data'
import { Observable } from 'rxjs/internal/Observable';
import { HttpHeaders }from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'undefined',
    'Authorization': 'my-auth-token'
  })
}

@Injectable({
  providedIn: 'root'
})

export class SongServiceService {
  
  private _url:string = "/assets/data/song-details.json"

  constructor(private http: HttpClient) { }

  getSongs(): Observable<SongDDetails[]>{
    return this.http.get<SongDDetails[]>(this._url);
  }

  addSong(songDetails: SongDDetails[]): Observable<SongDDetails[]>{
    return this.http.post<SongDDetails[]>(this._url, songDetails, httpOptions);
  }
}
