import { Component, OnInit, VERSION } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  public Teams = [
    { tag: 'SCGA', wins: 0, skins: 0, bonus: 0, tsr18: 0, tsf9: 0, tsb9: 0,     
      hw: [false,false,false,false,false,false,false,false,false,
           false,false,false,false,false,false,false,false,false],
      hw1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      hw2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      sf9: [8, 8, 8, 8, 8, 8, 8, 8, 8],
      sb9: [8, 8, 8, 8, 8, 8, 8, 8, 8],
    },
    { tag: 'USGA', wins: 0, skins: 0, bonus: 0, tsr18: 0, tsf9: 0, tsb9: 0,     
      hw: [false,false,false,false,false,false,false,false,false,
           false,false,false,false,false,false,false,false,false],
      hw1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      hw2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      sf9: [8, 8, 8, 8, 8, 8, 8, 8, 8],
      sb9: [8, 8, 8, 8, 8, 8, 8, 8, 8],
    },
    { tag: 'PGA', wins: 0, skins: 0, bonus: 0, tsr18: 0, tsf9: 0, tsb9: 0,     
      hw: [false,false,false,false,false,false,false,false,false,
           false,false,false,false,false,false,false,false,false],
      hw1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      hw2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      sf9: [8, 8, 8, 8, 8, 8, 8, 8, 8],
      sb9: [8, 8, 8, 8, 8, 8, 8, 8, 8],
    },
    { tag: 'LIV', wins: 0, skins: 0, bonus: 0, tsr18: 0, tsf9: 0, tsb9: 0,     
      hw: [false,false,false,false,false,false,false,false,false,
           false,false,false,false,false,false,false,false,false],
      hw1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      hw2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      sf9: [8, 8, 8, 8, 8, 8, 8, 8, 8],
      sb9: [8, 8, 8, 8, 8, 8, 8, 8, 8],
    },
    { tag: 'LPGA', wins: 0, skins: 0, bonus: 0, tsr18: 0, tsf9: 0, tsb9: 0,     
      hw: [false,false,false,false,false,false,false,false,false,
           false,false,false,false,false,false,false,false,false],
      hw1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      hw2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      sf9: [8, 8, 8, 8, 8, 8, 8, 8, 8],
      sb9: [8, 8, 8, 8, 8, 8, 8, 8, 8],
    },
    { tag: 'LET', wins: 0, skins: 0, bonus: 0, tsr18: 0, tsf9: 0, tsb9: 0,     
      hw: [false,false,false,false,false,false,false,false,false,
           false,false,false,false,false,false,false,false,false],
      hw1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      hw2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      sf9: [8, 8, 8, 8, 8, 8, 8, 8, 8],
      sb9: [8, 8, 8, 8, 8, 8, 8, 8, 8],
    },
    { tag: 'DPWT', wins: 0, skins: 0, bonus: 0, tsr18: 0, tsf9: 0, tsb9: 0,     
      hw: [false,false,false,false,false,false,false,false,false,
           false,false,false,false,false,false,false,false,false],
      hw1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      hw2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      sf9: [8, 8, 8, 8, 8, 8, 8, 8, 8],
      sb9: [8, 8, 8, 8, 8, 8, 8, 8, 8],
    },
    { tag: 'WGC', wins: 0, skins: 0, bonus: 0, tsr18: 0, tsf9: 0, tsb9: 0,     
    hw: [false,false,false,false,false,false,false,false,false,
         false,false,false,false,false,false,false,false,false],
    hw1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    hw2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    sf9: [8, 8, 8, 8, 8, 8, 8, 8, 8],
    sb9: [8, 8, 8, 8, 8, 8, 8, 8, 8],
    }
  ];

  public availableColors = [
    { name: 'none', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' },
  ];

  constructor(private httpC: HttpClient) {}

  ngOnInit() {
    this.tempfn();
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
  } // end tempfn()
}
