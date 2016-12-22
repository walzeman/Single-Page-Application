import { Injectable } from '@angular/core'
import { Http, Headers} from '@angular/http'
import 'rxjs/add/operator/map'
import {Artist} from "../../Artist";

@Injectable()
export class RestApiService {

    private headers = new Headers({'Content-Type': 'application/json'});

    private artistsUrl:string;
    private artistUrl:string;

    constructor(private http:Http){

    }

    getArtists() {
        this.artistsUrl = 'http://localhost:5000/api/artists';
        return this.http.get(this.artistsUrl)
            .map(res => res.json());
    }

    createArtist(artist:Artist){
        this.artistUrl = 'http://localhost:5000/api/artist'
        return this.http
            .post(this.artistUrl, JSON.stringify(artist), {headers: this.headers})
            .map(res => res.json());

    }

    deleteArtist(){

    }

    updateArtist(){

    }


}