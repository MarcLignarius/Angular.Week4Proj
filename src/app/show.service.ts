import { Injectable } from '@angular/core';
import { Show } from './models/show.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ShowService {
  shows: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.shows = database.list('shows');
  }

  getShows() {
    return this.shows;
  }

  addShow(newShow: Show) {
    this.shows.push(newShow);
  }

  getShowById(showId: string){
    return this.database.object('/shows/' + showId);
  }

  updateShow(localUpdatedShow) {
    var showEntryInFirebase = this.getShowById(localUpdatedShow.$key);
    showEntryInFirebase.update({
      title: localUpdatedShow.title,
      artist: localUpdatedShow.artist,
      description: localUpdatedShow.description,
      category: localUpdatedShow.category,
      price: localUpdatedShow.price,
      image: localUpdatedShow.image
    });
  }

  deleteShow(localShowToDelete){
    var showEntryInFirebase = this.getShowById(localShowToDelete.$key);
    showEntryInFirebase.remove();
  }
}
