import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from './services/data.service';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  posts: any;
  public dbRecs = [];
  public Teams = [];

  public teamObj = 
    { team:'', tw$:0, tsk:0, tb1:0, tb2:0, tr18:0, tf9:0, tb9:0, 
      gkey:'', lModh:'', lModt:'',
      lMh: ['','','','','','','','','','','','','','','','','','',],
      w$: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      sk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      b1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      b2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      f9: [8, 8, 8, 8, 8, 8, 8, 8, 8],
      b9: [8, 8, 8, 8, 8, 8, 8, 8, 8],
    };

  public availableColors = [
    { name: 'none', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' },
  ];

  constructor(private service:DataService) {}
    
  ngOnInit() {
    let ii = 0, jj = 0;

    this.service.getAll()
      .subscribe(response => {
        this.posts = response;
        this.dbRecs = this.posts.records;    
//        console.log(" ngOnInit - dbRecs:: ", this.dbRecs);
        this.mvFields(ii, jj);
        //        this.tempfn();
      });
  }

  mvrtHole(ii: number, jj: number) {
    if (this.dbRecs[ii].fields.LastMod > this.Teams[jj].lMh[this.dbRecs[ii].fields.hidx]) {
//      console.log("mvrtHole::", this.dbRecs[ii].fields.hidx, " ", jj, "::", this.Teams[jj].team, this.dbRecs[ii].fields.LastMod);
      this.Teams[jj].lMh[this.dbRecs[ii].fields.hidx] = this.dbRecs[ii].fields.LastMod;
      this.Teams[jj].w$[this.dbRecs[ii].fields.hidx] = this.dbRecs[ii].fields.win$;
      this.Teams[jj].tw$ += this.dbRecs[ii].fields.win$;
      this.Teams[jj].sk[this.dbRecs[ii].fields.hidx] = this.dbRecs[ii].fields.Skins;
      this.Teams[jj].tsk += this.dbRecs[ii].fields.Skins;
      this.Teams[jj].b1[this.dbRecs[ii].fields.hidx] = this.dbRecs[ii].fields.Bonus;
      this.Teams[jj].tb1 += this.dbRecs[ii].fields.Bonus;
    }
  }

  mvrtTeam(ii: number, jj: number) {
//    console.log("mvrtTeam>> ", this.dbRecs[ii].fields.RecType, ":: ", this.dbRecs[ii].fields.Team, " ? ", this.dbRecs[ii].fields.LastMod);
    if (this.dbRecs[ii].fields.LastMod > this.Teams[jj].lModt) {
    this.Teams[jj].lModt = this.dbRecs[ii].fields.LastMod;
    this.Teams[jj].f9[0] = this.dbRecs[ii].fields.h1;
    this.Teams[jj].f9[1] = this.dbRecs[ii].fields.h2;
    this.Teams[jj].f9[2] = this.dbRecs[ii].fields.h3;
    this.Teams[jj].f9[3] = this.dbRecs[ii].fields.h4;
    this.Teams[jj].f9[4] = this.dbRecs[ii].fields.h5;
    this.Teams[jj].f9[5] = this.dbRecs[ii].fields.h6;
    this.Teams[jj].f9[6] = this.dbRecs[ii].fields.h7;
    this.Teams[jj].f9[7] = this.dbRecs[ii].fields.h8;
    this.Teams[jj].f9[8] = this.dbRecs[ii].fields.h9;
    this.Teams[jj].b9[0] = this.dbRecs[ii].fields.h10;
    this.Teams[jj].b9[1] = this.dbRecs[ii].fields.h11;
    this.Teams[jj].b9[2] = this.dbRecs[ii].fields.h12;
    this.Teams[jj].b9[3] = this.dbRecs[ii].fields.h13;
    this.Teams[jj].b9[4] = this.dbRecs[ii].fields.h14;
    this.Teams[jj].b9[5] = this.dbRecs[ii].fields.h15;
    this.Teams[jj].b9[6] = this.dbRecs[ii].fields.h16;
    this.Teams[jj].b9[7] = this.dbRecs[ii].fields.h17;
    this.Teams[jj].b9[8] = this.dbRecs[ii].fields.h18;
      for (let kk = 0; kk < 9; kk++) {
        this.Teams[jj].tf9 += this.Teams[jj].f9[kk];
        // console.log("Team::", this.Teams[jj].team, "  f9[", kk, "]:", this.Teams[jj].f9[kk]);
      }
      for (let kk = 0; kk < 9; kk++) {
       this.Teams[jj].tb9 += this.Teams[jj].b9[kk];
      }
      this.Teams[jj].tr18 = this.Teams[jj].tf9 + this.Teams[jj].tb9;
//      console.log(">> mvrtTeam>> ", this.dbRecs[ii].fields.RecType, ":: ", this.dbRecs[ii].fields.Team, " ? ", this.dbRecs[ii].fields.LastMod);
    }
  }

  mvFields(ii: number, jj: number) {
    for (ii = 0; ii < this.dbRecs.length ; ii++) {
      let tagExists = false;
      for (jj = 0; jj < this.Teams.length && !tagExists; jj++) {
        if (this.dbRecs[ii].fields.Team == this.Teams[jj].team) {
          tagExists = true;
//          console.log("tagExists >> ", jj, this.dbRecs[ii].fields.RecType, ":: ", this.Teams[jj].team, " ? ", "<<", this.dbRecs[ii].fields.LastMod );
          if (this.dbRecs[ii].fields.RecType == 'Hole') {
            this.mvrtHole(ii, jj);
          }
          if (this.dbRecs[ii].fields.RecType == 'Team') { 
            this.mvrtTeam(ii, jj);
          }
        }
      }  // for jj
      if (!tagExists) {
        jj = this.Teams.length;
        this.Teams.push(); 
//   console.log("push Teams::", this.Teams, this.dbRecs[ii].fields.Team, jj);
        this.Teams[jj] = JSON.parse(JSON.stringify(this.teamObj));
        this.Teams[jj].team = this.dbRecs[ii].fields.Team;
        if (this.dbRecs[ii].fields.RecType == 'Hole') {
          this.mvrtHole(ii, jj);
        }
        if (this.dbRecs[ii].fields.RecType == 'Team') {
          this.mvrtTeam(ii, jj);
        }
      } // !tagExists
    }  // for ii
  }

  tempfn() {
    
    let skinpot = 0;
    let sf9 = 0;

    for (let ii = 0; ii < 9; ii++) {
      skinpot += 1;
      let minscore = Math.min(
        this.Teams[0].f9[ii],
        this.Teams[1].f9[ii],
        this.Teams[2].f9[ii],
        this.Teams[3].f9[ii]
      );
      let winner = 9;
      for (let jj = 0; jj < 4; jj++) {
        this.Teams[jj].hw[ii] = false;
        if (this.Teams[jj].f9[ii] == minscore) {
          if (winner == 9) {
            winner = jj;
          } else {
            winner = 9;
          }
        }
      }
      if (winner < 4) {
        this.Teams[winner].hw[ii] = true;
        this.Teams[winner].skins += skinpot;
        skinpot = 0;
      }
    }

    for (let ii = 0; ii < 9; ii++) {
      skinpot += 1;
      let minscore = Math.min(
        this.Teams[0].b9[ii],
        this.Teams[1].b9[ii],
        this.Teams[2].b9[ii],
        this.Teams[3].b9[ii]
      );
      let winner = 9;
      for (let jj = 0; jj < 4; jj++) {
        this.Teams[jj].hw[ii] = false;
        if (this.Teams[jj].b9[ii] == minscore) {
          if (winner == 9) {
            winner = jj;
          } else {
            winner = 9;
          }
        }
      }
      if (winner < 4) {
        this.Teams[winner].hw[ii] = true;
        this.Teams[winner].skins += skinpot;
        skinpot = 0;
      }
    }

    for (let jj = 0; jj < 4; jj++) {
      this.Teams[jj].wins = this.Teams[jj].bonus + this.Teams[jj].skins;
    }

  } // end tempfn()
}
