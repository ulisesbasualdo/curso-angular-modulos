import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
@Component({
  selector: 'gif-list',
  templateUrl: './gif-list.component.html',
  styles: ``,
})
export class GifListComponent {

  @Input()
  public gifs: Gif[] = [];

}
