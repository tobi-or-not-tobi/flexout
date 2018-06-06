import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiniCartComponent, SearchBoxComponent } from './sample.component';

const sampleComponents = [MiniCartComponent, SearchBoxComponent];

@NgModule({
    imports: [BrowserModule],
    declarations: sampleComponents.concat([AppComponent]),
    bootstrap: [AppComponent]
})
export class AppModule {}
