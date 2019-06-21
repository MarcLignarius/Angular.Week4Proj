import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Show } from '../models/show.model';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent{
  @Input() childShowList: Show[];
  @Output() clickSender = new EventEmitter();
  shows: Show[] = [
    new Show('flyer.jpg', 'NOFX', 'Portland Meadows', '07/12/2019 | 08:00 pm', 45, '21+'),
    new Show('flyer.jpg', 'Nile', 'Hawthorne Theater', '11/22/2019 | 07:30 pm', 25, 'All Ages'),
    new Show('flyer.jpg', 'Gojira', 'Roseland Theater', '07/29/2019 | 08:30 pm', 25, 'All Ages'),
  ];
  editButtonClicked(showToEdit: Show) {
    this.clickSender.emit(showToEdit);
  }

  constructor() { }

}
