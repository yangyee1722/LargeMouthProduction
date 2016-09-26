import { Directive, ElementRef, Input, Renderer } from '@angular/core';
@Directive({ selector: '[ngEnter]' })
export class EnterDirective {
    constructor(el: ElementRef, renderer: Renderer) {
       renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
    }
}


//  element.bind("keydown keypress", function (event) {
//             if (event.which === 13) {
//                 var whichFunction = attrs.ngEnter;
//                 scope.$apply(function () {
//                     scope.$eval(attrs.ngEnter);
//                     scope[whichFunction]();
//                 });
//                 event.preventDefault();
//             }
//         });