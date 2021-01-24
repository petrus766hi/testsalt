import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  dummy: () => `https://picsum.photos/v2/list?page=1&limit=8`,
};

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {

  constructor(private httpClient: HttpClient) { }

  getChannels(): Observable<string> {
    return this.httpClient.get(routes.dummy()).pipe(
      map((body: any) => body),
      catchError(() => of('Error, could not load joke :-('))
    );
  }
}
