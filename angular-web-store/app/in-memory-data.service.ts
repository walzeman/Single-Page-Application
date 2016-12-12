import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let products = [
      {id: 1, name: 'iPhone',category:'Phone', description:'Listen music'},
      {id: 2, name: 'omega',category:'Watch', description:'for a Compass, healthy life'},
      {id: 3, name: 'iPod',category:'Tablet', description:'Listen music'},
      {id: 4, name: 'VLC',category:'Music Player', description:'watching video'},
      {id: 5, name: 'seiko',category:'watch', description:'heart-beat measure'},
      {id: 6, name: 'sumsung',category:'Phone', description:'Listen music'}
    ];
    return {products};
  }
}
