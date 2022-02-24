import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgModule } from '@angular/core';
import { InputUppercaseDirective } from './directives/input-uppercase.directive';

@NgModule({
  exports: [SpinnerComponent, InputUppercaseDirective],
  declarations: [SpinnerComponent, InputUppercaseDirective],
})
export class SharedModule {}
