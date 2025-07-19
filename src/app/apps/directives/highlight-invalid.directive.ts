import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appHighlightInvalid]'
})
export class HighlightInvalidDirective {
  constructor(
    private el: ElementRef,
    private control: NgControl,
    private renderer: Renderer2
  ) {}

  @HostListener('blur')
  // error border for fields
  onBlur() {
    if (this.control.invalid && this.control.touched) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid red');
      this.renderer.setStyle(this.el.nativeElement, 'border-radius', '4px');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'border');
    }
  }
}
