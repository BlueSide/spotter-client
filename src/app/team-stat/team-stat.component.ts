import { Component, Input, OnInit } from '@angular/core';
import { BallsportsService } from '../ballsports.service';

@Component({
  selector: 'team-stat',
  templateUrl: './team-stat.component.html',
  styleUrls: ['./team-stat.component.scss']
})
export class TeamStatComponent implements OnInit
{
    @Input() stat: TeamStat;
    
    constructor(private ballsports: BallsportsService) {}

    ngOnInit()
    {
    }

    public update()
    {
        this.ballsports.sendTeamStat(this.stat).subscribe((data) => {
            console.log(data);
        });
    }
    
    public increment(team: string): void
    {
        ++this.stat[team];
        this.update();
    }

    public decrement(team: string): void
    {
        --this.stat[team];
        this.update();
    }
}

export interface TeamStat
{
    title: string;
    id: number;
    team0: number;
    team1: number;
}
