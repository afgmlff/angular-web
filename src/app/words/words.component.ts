import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { wordlist } from './test';



@Component({ //decorator, passa um obj de metadados
  selector: 'app-words', //tag html que uso pra representar o componente
  templateUrl: './words.component.html', 
  styleUrls: ['./words.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WordsComponent implements OnInit {
  test: number
  rndWord: string
  rndArr: any[] = []

  constructor() { 

    const listLength = wordlist.length
//    console.log("size: " + listLength)
    this.test = listLength

    /*

    filtrar p 5 letter words.

    */

    this.rndWord = wordlist[Math.floor(Math.random()*this.test)]

    while (this.rndWord.length != 5){
      this.rndWord = wordlist[Math.floor(Math.random()*this.test)]
    } //palavra secreta
    
    this.rndArr = this.rndWord.split('').slice(0, 5)

    console.log(this.rndArr)

  }

  ngOnInit(): void {
  }

}
