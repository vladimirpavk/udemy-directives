import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input('appBetterHighlight') highlightColor: string = "blue";
  @Input() defaultColor: string = "transparent";

  @HostBinding('style.backgroundColor') backgroundColor: string='red';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

   }

  ngOnInit(){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor=this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter(event: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    //this.backgroundColor = 'blue';
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(event: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    //this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }

}
