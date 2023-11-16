import {
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    Output,
} from '@angular/core';

@Directive({
    selector: '[clickOutside]',
})
export class ClickOutsideDirective {
    constructor(private _elementRef: ElementRef) {}

    @Output()
    public clickOutside = new EventEmitter();

    @HostListener('document:click', ['$event.target'])
    public onClick(targetElement: any) {
        console.log();
        const clickedInside =
            this._elementRef.nativeElement.contains(targetElement);

        const targetIsFather = targetElement.contains(
            this._elementRef.nativeElement
        );

        console.log(targetIsFather);

        if (!clickedInside && !targetIsFather) {
            this.clickOutside.emit(null);
        }
    }
}
