import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToLowerCase]'
})
export class ToLowerCaseDirective {

  constructor(private eleRef:ElementRef,private rendrer : Renderer2) { 

  }
  // @HostListener('keyup')
  // onKeyup(){
  //   console.log(this.eleRef.nativeElement.value); // value ex: aaa
  //   this.eleRef.nativeElement.value = this.eleRef.nativeElement.value.toLowerCase()
  //   console.log(this.eleRef.nativeElement.value);  
  // }
   

@HostListener("input", ['$event'])
onInput (eve: Event){
  // console.log(eve);
  // console.log(eve.target);
  let inputControl = eve.target as HTMLInputElement;
  console.log(inputControl.value);
  let val = inputControl.value.toLowerCase();
  inputControl.value = val;
  console.log(val);
  
  

  
}

}

