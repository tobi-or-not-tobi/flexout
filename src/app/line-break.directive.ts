import { Directive, ElementRef, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
    selector: '[.line-break-before, .line-break-after]'
})
export class LineBreakDirective {
    constructor(private elementRef: ElementRef, private renderer: Renderer2, @Inject(DOCUMENT) private document) {}

    ngOnInit() {
        if (this.elementRef.nativeElement.classList.contains('line-break-before')) {
            this.insertBefore();
        }
        if (this.elementRef.nativeElement.classList.contains('line-break-after')) {
            this.insertAfter();
        }
    }

    private insertBefore() {
        const breakElement = this.createBreakElement();
        this.renderer.insertBefore(
            this.elementRef.nativeElement.parentNode,
            breakElement,
            this.elementRef.nativeElement
        );
    }

    private insertAfter() {
        const breakElement = this.createBreakElement();
        this.renderer.insertBefore(
            this.elementRef.nativeElement.parentNode,
            breakElement,
            this.elementRef.nativeElement.nextSibling
        );
        // this.renderer.insertBefore(
        //     this.elementRef.nativeElement.parentNode,
        //     breakElement,
        //     this.elementRef.nativeElement
        // );
    }

    private createBreakElement(): Element {
        const breakElement = document.createElement('div');
        breakElement.classList.add('line-break');
        return breakElement;
    }
}
