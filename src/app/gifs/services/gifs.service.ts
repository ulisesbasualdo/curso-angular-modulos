import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {

  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private readonly apiKey: string = '4qrD3cBZMvFsfAtBi8FbhQ06d0GUaA8Y';
  private readonly serviceUrl: string = 'http://api.giphy.com/v1/gifs';

  public get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  constructor ( private readonly http: HttpClient ){
    this.loadLocalStorage();
    console.log('Gifs Service Ready!!');

  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(
        (oldtag) => oldtag !== tag
      );
    }
    this._tagsHistory.unshift( tag );
    this._tagsHistory = this._tagsHistory.splice(0,10);
    this.saveLocalStorage();
  }

  private saveLocalStorage():void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory))
  }

  private loadLocalStorage():void {
    if( !localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

    if ( this._tagsHistory.length === 0 ) return;
    this.searchTag( this._tagsHistory[0] );
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag)

    this.http.get<SearchResponse>(
      `${this.serviceUrl}/search`, {params}
    ).subscribe( resp => {
      this.gifList = resp.data;
    })

  }
}
