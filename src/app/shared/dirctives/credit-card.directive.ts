import { Directive, ElementRef, HostListener, LOCALE_ID, OnInit } from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective implements OnInit {

  constructor(private eleRef : ElementRef) { }
  ngOnInit(): void {
    this.createErrMsg()
  }

@HostListener("input",['$event'])
  validateCreditCard(eve:Event){
    let inputControl = eve.target as HTMLInputElement;
    let inputval = inputControl.value;
    //console.log(inputControl.value);
    inputval=inputval.replace(/\s+/g,'')
    //console.log(inputval);
    //inputControl.value = inputControl.value.replace(/\s+/g, '');

    if(inputval.length > 16){
      inputval=inputval.substring(0,16)
    }
    console.log(inputval);
    if(/[^\d]/.test(inputval)){
      inputControl.nextElementSibling?.classList.remove('d-none')
    }else{
      inputControl.nextElementSibling?.classList.add('d-none')

    }
    inputval = this.chunkedArr(inputval)
    console.log(inputval);
    inputControl.value = inputval;

   
  
    
    
  } 
// chunkedArr
private chunkedArr(str : string){
  let arr : Array<string> =[]
  for(let i=0; i< str.length; i+=4){
    arr.push(str.slice(i,i+4))
  }
  return arr.join(" ")
}
private createErrMsg(){
  let p = document.createElement("p");
  p.className = "alert alert-danger d-none";
  p.innerHTML =`please enter valid card number !!`;
 console.log(this.eleRef.nativeElement.parentNode);
 this.eleRef.nativeElement.parentNode.append(p);
 
} 

}



