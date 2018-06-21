import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from '../environments/environment';
import { TeamStat } from './team-stat/team-stat.component';

@Injectable()
export class BallsportsService
{

    public host: string = 'http://127.0.0.1:3301/';
    public matchId: string = '12';
    
    constructor(private http: HttpClient)
    {
    }

    public getAllStats(): Observable<any> {
        return this.http.get(`${this.host}?${this.matchId}`, this.makeHeaders());
    }
    
    public sendTeamStat(stat: TeamStat): Observable<any> {
        return this.http.post(`${this.host}?${this.matchId}`, stat, this.makeHeaders());
    }

    public sendPlayerStat(stat: any): Observable<any> {
        return this.http.post(`${this.host}?${this.matchId}`, stat, this.makeHeaders());
    }

    private makeHeaders(): any
    {
        /* NOTE (Marlon):  
           This is a VERY basic security measurement. Since this application
           will probably be hosted in a closed environment, we'll use this very basic way
           of verifying the legitimacy of the client. 
        */
        //TODO: Get from environment
        let username: string = 'spotterclient';
        let password: string = 'Titel1';
        let headersObj: any = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(username + ':' + password)
        };

        let headers = new HttpHeaders(headersObj);
        return {headers: headers};
    }
}
