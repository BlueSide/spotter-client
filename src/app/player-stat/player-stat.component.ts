import { Component, Input } from '@angular/core';
import { BallsportsService } from '../ballsports.service';

@Component({
  selector: 'player-stat',
  templateUrl: './player-stat.component.html',
  styleUrls: ['./player-stat.component.scss']
})
export class PlayerStatComponent
{
    @Input() stat: any;
    
    constructor(private ballsports: BallsportsService) {}

    public update()
    {
        console.log(this.stat);
        this.ballsports.sendPlayerStat(this.stat).subscribe((data) => {
            console.log(data);
        });
    }
    
    public increment(): void
    {
        ++this.stat.value;
        this.update();
    }

    public decrement(): void
    {
        --this.stat.value;
        this.update();
    }
}
