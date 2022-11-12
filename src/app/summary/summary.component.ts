import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../player";
import {PLAYERS, SUMMARY} from "../players";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  // @Input() players?: Player[];
  hero: Player | undefined;
  @Input() players?: Player[];
  summary!: String;
  constructor() {


  }

  ngOnInit(): void {
    if (this.hero != null && this.players != null) {


    }
  }



  settle() {
    if(this.players == null){
      return
    }

    this.hero = SUMMARY
    this.hero.buyin = 0
    this.hero.chips = 0

    for (let i = 0; i < this.players.length; i++) {
      this.hero.buyin += Number(this.players[i].buyin);
      this.hero.chips += Number(this.players[i].chips);
    }

    if(this.hero.buyin != this.hero.chips){
      this.summary = "Niepoprawna liczba żetonów\n";
      return
    }

    this.summary = "Kasia rozlicza Sławka\n";
    this.players[2].chips += this.players[3].chips;
    this.players[3].chips = 0
    this.players[2].buyin += this.players[3].buyin;
    this.players[3].buyin = 0
    for (let player of this.players) {
      player.balance = player.chips - player.buyin;
      player.summary = ""
    }

    function chipsToMoney(chips: number) {
      let m = chips /20
      return m.toFixed(2) + "zł";
    }
    for (let i = 0; i < this.players.length; i++) {

    }
    for (let i = 0; i < this.players.length; i++) {
      let curPlayer: Player | undefined;
      let maxPlayer: Player | undefined;
      // var b: Player = null;
      // curPlayer = this.players[0]
      // curPlayer = null;
      for (let player of this.players) {
        if (player.balance < 0) {
          if (curPlayer == null) {
            curPlayer = player;
          } else if (Math.abs(player.balance) < Math.abs(curPlayer.balance)) {
            curPlayer = player;
          }
        }
        if (maxPlayer == null) {
          maxPlayer = player;
        } else if (player.balance > maxPlayer.balance) {
          maxPlayer = player;
        }
      }
      if (curPlayer != null && maxPlayer != null) {
        let number = Math.min(Math.abs(curPlayer.balance),Math.abs(maxPlayer.balance));
        curPlayer.balance +=number;
        curPlayer.summary += " Płaci " + chipsToMoney(number) + " " + maxPlayer.name + " \n ";
        maxPlayer.balance -=number;
        maxPlayer.summary += " Otrzymuje " + chipsToMoney(number) + " od " + curPlayer.name + " \n ";
        this.summary += " " +  curPlayer.name + " płaci " + chipsToMoney(number) + " " + maxPlayer.name +  " \n ";
      }

    }
  }


}
