import { Component } from '@angular/core';
import {LocalStorageService} from "../../services/local-storage.service";
import {Router} from "@angular/router";
import {elementAt} from "rxjs";

@Component({
  selector: 'app-clavier',
  templateUrl: './clavier.component.html',
  styleUrls: ['./clavier.component.css']
})
export class ClavierComponent {
  playerName:string | null='';
  listLetter:string[]=['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P' ,'Q', 'S', 'D', 'F',
    'G', 'H', 'J', 'K', 'L', 'M', 'W', 'X', 'C', 'V', 'B', 'N'];
  sotumTable=[{latter:"",state:""}];
  isValide:string=""
  wordOfDate:string="TEST";
  test: number []= []
  private te: string[]=[];


  constructor(private localStorageService:LocalStorageService, private router:Router) {}

  addLatterInSotumTable(letter: string) {

    for (let i = 0; i < 47; i++) {

      if (this.sotumTable[i].latter != "" && this.sotumTable[i + 1].latter == "") {
        if ((i + 3) % 8 == 1 && i != 1) {
          if (i < 46) {
            this.sotumTable[i + 2].latter = this.wordOfDate[0];
            this.sotumTable[i + 1].latter = letter;
          } else if (i == 46) {
            this.sotumTable[i + 1].latter = letter;
          }

        } else {
          this.sotumTable[i + 1].latter = letter;
        }
        this.bgColor(i);
        // if(this.listLetter.filter(ele=>this.wordOfDate.includes(ele))){
        //   this.isValide=this.sotumTable[i+1].state;
        // }
        ;

        return;
      }

    }
  }

  private bgColor(i: number) {


    if (i < 8) {
      this.statOfSotumTableElement(i, 0);
    } else if (i >= 8 && i < 2 * 8) {
      this.statOfSotumTableElement(i, 8);
    } else if (i >= 2 * 8 && i < 3 * 8) {
      this.statOfSotumTableElement(i, 16)
    } else if (i >= 3 * 8 && i < 4 * 8) {
      this.statOfSotumTableElement(i, 24)
    } else if (i >= 4 * 8 && i < 5 * 8) {
      this.statOfSotumTableElement(i, 32)
    } else if (i >= 5 * 8 && i < 6 * 8) {
      this.statOfSotumTableElement(i, 40)
    } else if (i >= 6 * 8) {
      this.statOfSotumTableElement(i, 48)
    }
    if (this.sotumTable[i + 2].latter == this.wordOfDate[0] && i < 45) {
      this.sotumTable[i + 2].state = 'true';
    }

  }

  private statOfSotumTableElement(i: number,min:number):void {
    if ((this.wordOfDate.includes(this.sotumTable[i + 1].latter) &&
      this.wordOfDate.lastIndexOf(this.sotumTable[i + 1].latter) == i - min + 1)) {
      this.sotumTable[i + 1].state = 'true';


    } else if (this.wordOfDate.includes(this.sotumTable[i + 1].latter) && this.wordOfDate.indexOf(this.sotumTable[i + 1].latter) != i -min + 1) {
      this.sotumTable[i + 1].state = 'include'
    }
  }

  public clear(){
    this.test=[]
    for (let i = 0; i < this.sotumTable.length; i++) {
      if(this.sotumTable[i].latter!=""){
        this.test.push(i);
      }

    }
    for (let i = 0; i < this.sotumTable.length; i++) {
      let m= Math.max(...this.test)
      this.sotumTable[m].latter=""
    }
  }
  public validateSotum():boolean{

    this.test=[]
    for (let i = 0; i < this.sotumTable.length; i++) {
      if (this.sotumTable[i].latter!=""){
        this.te.push(this.sotumTable[i].latter)
      }
    }
    if(this.te.join("").includes(this.wordOfDate)){

      return  true
    }

    return false
  }
  player(){
    window.location.reload();
  }

  ngOnInit(): void{
      this.playerName=this.localStorageService.getItem('name')
    for (let i = 0; i < 47; i++) {
      this.sotumTable.push({latter: "",state: ""});
    }

    this.sotumTable[0].latter=this.wordOfDate[0];
    this.sotumTable[0].state='true'
  }
}
