import { Component } from '@angular/core';

import { RestApiService } from '../../services/rest_api.service'
// import { Artist } from '../../../Artist'
//
// export class Artist1{
//
//     name: String;
//     album: String;
// }

@Component({
  moduleId:module.id,
  selector: 'history',
  templateUrl: `history.component.html`

})

export class HistoryComponent  {


    artists = '';



      constructor(private restApiService: RestApiService) {}

    getArtists(): void {

        this.restApiService.getArtists()
            .subscribe(res => {
                this.artists = res;
                console.log(res);
            })

    }

}
