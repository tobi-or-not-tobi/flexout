import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiniCartComponent, SearchBoxComponent } from './sample.component';
import { LineBreakDirective } from './line-break.directive';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, MiniCartComponent, SearchBoxComponent, LineBreakDirective],
    bootstrap: [AppComponent]
})
export class AppModule {}
