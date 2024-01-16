import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {LocalStorageService} from "../../services/local-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  playerName?:string;
  constructor(private localStorageService:LocalStorageService, private router:Router) {}
  savePlayerToLocalStorage(key:string,playerName:string) {
    this.localStorageService.setItem(key, playerName);
  }
  onSubmit(){
    this.savePlayerToLocalStorage('name',this.playerName!);
    this.router.navigateByUrl('/clavier')
  }
}
