import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ipost } from '../const/interrface';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {
  posturl = `${environment.baseurl}/posts.json`;
  constructor(private _http: HttpClient) { }
  private postsub$: Subject<Ipost> = new Subject<Ipost>()
  postsubobj$: Observable<Ipost> = this.postsub$.asObservable()
  private updateobj$: Subject<Ipost> = new Subject<Ipost>()
  updateobjobj$: Observable<Ipost> = this.updateobj$.asObservable()
  private deleted$: Subject<string> = new Subject<string>()
  deletedobj$: Observable<string> = this.deleted$.asObservable()
  
  fetchproducts(): Observable<any> {
    return this._http.get(this.posturl)
      .pipe(
        map((res: any) => {
          let postarr: Array<string> = [];
          for (const key in res) {

            postarr.push({ ...res[key], id: key })
          }
          return postarr
        })
      );
  }


  ceratepost(post: Ipost): Observable<any> {
    return this._http.post(this.posturl, post)
  }


  sendNext(post: Ipost) {
    this.postsub$.next(post)
  }
  updatepost(update: Ipost): Observable<any> {
    let updateurl = `${environment.baseurl}/posts/${update.id}.json`
    return this._http.patch(updateurl, update)
  }
  sendUpdatepost(post: Ipost) {

    this.updateobj$.next(post)
  }

  deleteapi(id: string): Observable<any> {
    let deleteurl = `${environment.baseurl}/posts/${id}.json`;
    return this._http.delete(deleteurl)
  }
  senddelte(id: string) {
    this.deleted$.next(id)
  }
}
