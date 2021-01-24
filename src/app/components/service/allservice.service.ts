import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  dummy: () => `https://picsum.photos/v2/list?page=1&limit=2`,
  detail: () => `https://picsum.photos/id/1002/info`,
  people: () => `https://dummyapi.io/data/api/user?limit=5`,

};
const httpHeaders: HttpHeaders = new HttpHeaders({
  'app-id': '600cdfdd15c37b3260d7206e'
});

@Injectable({
  providedIn: 'root'
})
export class AllserviceService {

  constructor(private httpClient: HttpClient ) { }

  getAll(): Observable<string> {
    return this.httpClient.get(routes.dummy()).pipe(
      map((body: any) => body),
      catchError(() => of('Error, could not load joke :-('))
    );
  }
  getId(): Observable<string> {
    return this.httpClient.get(routes.detail()).pipe(
      map((body: any) => body),
      catchError(() => of('Error, could not load joke :-('))
    );
  }
  getPeople(): Observable<string> {
    return this.httpClient.get(routes.people(),{ headers: httpHeaders }).pipe(
      map((body: any) => body),
      catchError(() => of('Error, could not load joke :-('))
    );
  }
}
