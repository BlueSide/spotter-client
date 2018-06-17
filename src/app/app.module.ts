import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BallsportsService } from './ballsports.service';

import { AppComponent } from './app.component';
import { TeamStatComponent } from './team-stat/team-stat.component';
import { PlayerStatComponent } from './player-stat/player-stat.component';

@NgModule({
    declarations: [
        AppComponent,
        TeamStatComponent,
        PlayerStatComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        BallsportsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
