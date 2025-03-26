import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
@Component({
  selector: 'gif-list',
  template: `
    <div class="row">
      @for (gif of gifs; track gif.id) {
        <div class="col-md-3 col-sm-6 g-2">
          <gif-item [gif]="gif"></gif-item>
        </div>
      }
    </div>
  `,
  styles: ``,
})
export class GifListComponent {
  @Input()
  public gifs: Gif[] = [];
}
