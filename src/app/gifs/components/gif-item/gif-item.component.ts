import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gif-item',
  template: `
    <div class="card mb-2 text-center bg-dark h-100">
      <lazy-image [url]="gif.images.downsized_medium.url" [alt]="gif.title || 'no name'"></lazy-image>
      <!-- <img [src]="gif.images.downsized_medium.url" alt="{{ gif.title }}" class="card-img-top" /> -->
      <div class="card-body text-white">
        <p class="card-text">
          {{ gif.title || 'no title' }}
        </p>
      </div>
    </div>
  `,
})
export class GifItemComponent implements OnInit {
  @Input()
  public gif!: Gif;

  ngOnInit(): void {
    if (!this.gif) throw new Error('gif is required');
  }
}
