import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LineBreakDirective } from './line-break.directive';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, LineBreakDirective],
    bootstrap: [AppComponent]
})
export class AppModule {}
