import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lazy-image',
  template: `
    <div class="d-flex justify-content-center">
      <img [src]="url" [alt]="alt" class="card-img-top"
      (load)="onLoad()"
      [ngStyle]= "{display: hasLoaded ? '' : 'none'}"
      />
      @if (!hasLoaded) {
        <img src="circles.svg" height="35" width="35" class="mt-3" />
      }
    </div>
  `,
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;

  @Input()
  public alt!: string;

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('no mandaste url');
  }

  onLoad() {
    console.log('image loaded');
    this.hasLoaded = true;
  }
}
