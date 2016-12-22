import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service'
import { RestApiService } from '../../services/rest_api.service'

import { Artist } from '../../../Artist'
import { Album } from '../../../Album'
import { ActivatedRoute } from '@angular/router'

@Component({
  moduleId:module.id,
  selector: 'artist',
  templateUrl: `artist.component.html`

})

export class ArtistComponent implements OnInit {

  id:string;
  artist:Artist[];
  albums:Album[];
  createdArtist = '';

  constructor(private spotifyService:SpotifyService, private route:ActivatedRoute, private restApiService: RestApiService ){

  }

  ngOnInit(){
     this.route.params
       .map(params => params['id'])
       .subscribe((id) => {
            this.spotifyService.getArtist(id)
              .subscribe(artist => {

                  this.artist = artist;
                  console.log(artist.name);

                  this.restApiService.createArtist(artist)
                      .subscribe(result => {
                          this.createdArtist = result;
                          console.log(result);
                      })
              })


          this.spotifyService.getAlbums(id)
           .subscribe(albums => {
             this.albums = albums.items;
               console.log(this.albums)
           })

         /*   this.restApiService.createArtist(this.artist)
                .subscribe(artist => {
                    this.createdArtist = artist;
                })*/

       })
   }
}
