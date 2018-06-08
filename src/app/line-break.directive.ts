import { Directive, ElementRef, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
    selector: '.line-break-before'
})
export class LineBreakDirective {
    constructor(private elementRef: ElementRef, private renderer: Renderer2, @Inject(DOCUMENT) private document) {}

    ngOnInit() {
        const child = document.createElement('div');
        child.classList.add('line-break');
        this.renderer.insertBefore(this.elementRef.nativeElement.parentNode, child, this.elementRef.nativeElement);
    }
}
