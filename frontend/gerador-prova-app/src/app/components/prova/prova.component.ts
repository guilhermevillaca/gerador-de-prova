import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  imports: [],
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css'
})
export class ProvaComponent implements OnInit{
  
  constructor(){

  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  

  public criar(){
    console.log("teste");
  }

}
