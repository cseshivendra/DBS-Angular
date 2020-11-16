import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[format]'
})
export class FormatterDirective {

  constructor(private elem: ElementRef) { }

  @Input('format') countryCode;

  @HostListener('blur')
  formatPhone(){

    console.log(`The value is ${this.elem.nativeElement.value}`)
    console.log('Country code is '+ this.countryCode)
    if (this.countryCode === 'IN'){
      this.elem.nativeElement.value = '+91-' + this.elem.nativeElement.value;
    } else if (this.countryCode === 'US'){
      this.elem.nativeElement.value = '+1-' + this.elem.nativeElement.value;
    }
  }

  @HostListener('focus')
  onFocus(){
    console.log('Came inside the focus method of the directive');
  }




}
