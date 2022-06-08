import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcaTexto]'
})
export class MarcaTextoDirective implements OnInit {
  @Input() corDeFundo ='yellow';
  @Input() corDoTexto ='white';


  constructor(private elemento: ElementRef) { }


  ngOnInit() {
    this.mudarFundo();
    
  }
   
  private mudarFundo(cor: String = 'yellow') {
    this.elemento.nativeElement.style.backgroundColor = this.corDeFundo || cor;
    this.elemento.nativeElement.style.Color = this.corDeFundo;
    this.elemento.nativeElement.style.fontweight ='bold'; 

  }

}
