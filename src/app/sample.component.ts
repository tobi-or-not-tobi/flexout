import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-mini-cart',
    template: `mini cart`
})
export class MiniCartComponent {}

@Component({
    selector: 'app-search-box',
    template: `search box <button (click)="rem5=!rem5">Align in center</button>`
})
export class SearchBoxComponent {
    @HostBinding('class.space-before') spaceBefore: boolean = true;
    @HostBinding('class.rem5') rem5: boolean = true;
    @HostBinding('class.space-after') spaceAfter: boolean = true;
}
