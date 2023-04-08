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

  public gscObj = 
    { team:'team', win$:0, sk:0, b1:0, b2:0, tr18:0, tsf9:0, tsb9:0, 
      gkey:'', lModh:'', lModt:'',
      hw: [false,false,false,false,false,false,false,false,false,
           false,false,false,false,false,false,false,false,false],
      hw1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      hw2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      sf9: [8, 8, 8, 8, 8, 8, 8, 8, 8],
      sb9: [8, 8, 8, 8, 8, 8, 8, 8, 8],
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

  mvFields() {
    for (let ii = 0; ii < this.dbRecs.length ; ii++) {
      let tagExists = false;
      for (let jj = 0; jj < this.Teams.length && !tagExists; jj++) {
        // 
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
