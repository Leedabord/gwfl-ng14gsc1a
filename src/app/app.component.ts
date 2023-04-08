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
    { team:'team', tw$:0, tsk:0, tb1:0, tb2:0, tr18:0, tf9:0, tb9:0, 
      gkey:'', lModh:'', lModt:'',
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
    this.service.getAll()
      .subscribe(response => {
        this.posts = response;
        console.log(" ngOnInit - posts:: ", this.posts);
        this.dbRecs = this.posts.records;    
      });
    this.mvFields();
    this.tempfn();
  }

  mvrtHole(ii: number, jj: number) {
    this.Teams[jj].lModh = this.dbRecs[ii].fields.LastMod;
    this.Teams[jj].w$[this.dbRecs[ii].fields.hidx] = this.dbRecs[ii].fields.win$;
    this.Teams[jj].tw$ += this.dbRecs[ii].fields.win$;
    this.Teams[jj].sk[this.dbRecs[ii].fields.hidx] = this.dbRecs[ii].fields.Skins;
    this.Teams[jj].tsk += this.dbRecs[ii].fields.Skins;
    this.Teams[jj].b1[this.dbRecs[ii].fields.hidx] = this.dbRecs[ii].fields.Bonus;
    this.Teams[jj].tb1 += this.dbRecs[ii].fields.Bonus;
  }
/*              { team:'team', tw$:0, tsk:0, tb1:0, tb2:0, tr18:0, tsf9:0, tsb9:0, 
              gkey:'', lModh:'', lModt:'',
              w$: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              sk: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              b1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              b2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              f9: [8, 8, 8, 8, 8, 8, 8, 8, 8],
              b9: [8, 8, 8, 8, 8, 8, 8, 8, 8], */

  mvrtTeam(ii: number, jj: number) {
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
    }
    for (let kk = 0; kk < 9; kk++) {
      this.Teams[jj].tb9 += this.Teams[jj].b9[kk];
    }
    this.Teams[jj].tr18 = this.Teams[jj].tf9 + this.Teams[jj].tb9;
  }

  mvFields() {
    for (let ii = 0; ii < this.dbRecs.length ; ii++) {
      let tagExists = false;
      for (let jj = 0; jj < this.Teams.length && !tagExists; jj++) {
        if (this.dbRecs[ii].fields.Team == this.Teams[jj].team) {
          tagExists = true;
          if ((this.dbRecs[ii].fields.RecType == 'Hole') 
            && (this.dbRecs[ii].fields.LastMod > this.Teams[jj].lModh)) {
              this.mvrtHole(ii, jj);
          }
          if ((this.dbRecs[ii].RecType == 'Team') 
            && (this.dbRecs[ii].fields.LastMod > this.Teams[jj].lModt)) {
              this.mvrtTeam(ii, jj);
          }
        }
      }
      if (!tagExists) {
        this.Teams.push();
        this.Teams[this.Teams.length] = JSON.parse(JSON.stringify(this.teamObj));
      }
    }
  }

  tempfn() {
    
    let skinpot = 0;
    let sf9 = 0;

    for (let ii = 0; ii < 9; ii++) {
      skinpot += 1;
      let minscore = Math.min(
        this.Teams[0].sf9[ii],
        this.Teams[1].sf9[ii],
        this.Teams[2].sf9[ii],
        this.Teams[3].sf9[ii]
      );
      let winner = 9;
      for (let jj = 0; jj < 4; jj++) {
        this.Teams[jj].hw[ii] = false;
        if (this.Teams[jj].sf9[ii] == minscore) {
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
        this.Teams[0].sb9[ii],
        this.Teams[1].sb9[ii],
        this.Teams[2].sb9[ii],
        this.Teams[3].sb9[ii]
      );
      let winner = 9;
      for (let jj = 0; jj < 4; jj++) {
        this.Teams[jj].hw[ii] = false;
        if (this.Teams[jj].sb9[ii] == minscore) {
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

    const object = { a: 1, b: 2, c: 3 };
    for (const property in object) {
      console.log(`${object[property]}`);
    }

  } // end tempfn()
}
