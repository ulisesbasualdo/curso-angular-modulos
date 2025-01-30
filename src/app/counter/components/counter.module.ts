import { NgModule } from "@angular/core";
import { CounterComponent } from './counter/ccounter.component';

@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule {

}
