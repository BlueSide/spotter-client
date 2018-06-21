import { Component } from '@angular/core';
import { TeamStat } from './team-stat/team-stat.component';
import { BallsportsService } from './ballsports.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    teamStats: any[];

    connected: boolean;
    loading: boolean;
    matchTitle: string;
    matchId: number;

    playersTeam0: any[];
    playersTeam1: any[];

    selectedPlayerTeam0: any = {};
    selectedPlayerTeam1: any = {};

    lastSelectedPlayer0: number = 0;
    lastSelectedPlayer1: number = 0;
    
    constructor(public ballsports: BallsportsService)
    {
        //setInterval(this.getData.bind(this), 5000);
        this.getData();
    }

    public getData()
    {
        this.loading = true;
        this.ballsports.getAllStats().subscribe(
            (data) => {
                
                //console.log(data);
                /*
                  this.teamStats = data.teamStats.filter((item) => {
                  return (!item.title) || (item.title != '');
                  });
                */
                //this.matchTitle = data.title;
                this.matchId = data.matchId;

                this.playersTeam0 = data.players.filter((item, index) => {
                    return item.id !== '0' && index < 19;
                });

                // Add the playerId and teamId to every stat
                this.playersTeam0.forEach((player) => {
                    player.stats.forEach((stat) => {
                        stat.teamId = 0;
                        stat.playerId = player.id;
                    });
                });

                
                this.playersTeam1 = data.players.filter((item, index) => {
                    return item.id !== '0' && index >= 20 && index < 39;
                });


                // Add the playerId and teamId to every stat
                this.playersTeam1.forEach((player) => {
                    player.stats.forEach((stat) => {
                        stat.teamId = 1;
                        stat.playerId = player.id;
                    });
                });

                this.selectedPlayerTeam0 = this.playersTeam0[this.lastSelectedPlayer0];
                this.selectedPlayerTeam1 = this.playersTeam1[this.lastSelectedPlayer1];
                /*
                //NOTE: Select the first player of any team if none is selected
                if(Object.keys(this.selectedPlayerTeam0).length === 0)
                this.selectedPlayerTeam0 = this.playersTeam0[0];
                if(Object.keys(this.selectedPlayerTeam1).length === 0)
                this.selectedPlayerTeam1 = this.playersTeam1[0];
                */
                this.connected = true;
                this.loading = false;
            },
            error => {
                //TODO: Try to reconnect
                this.connected = false;
                this.loading = false;
            }
        );
    }

    public selectPlayer(player: any, team: number, index: number)
    {
        if(team === 0)
        {
            this.selectedPlayerTeam0 = player;
            this.lastSelectedPlayer0 = index;
        }
        if(team === 1)
        {
            this.selectedPlayerTeam1 = player;   
            this.lastSelectedPlayer1 = index;
        }
    }
}
