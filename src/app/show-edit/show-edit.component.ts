import { Component, Input, OnInit } from '@angular/core';
import { ShowService } from '../show.service';

@Component({
  selector: 'app-show-edit',
  templateUrl: './show-edit.component.html',
  styleUrls: ['./show-edit.component.css'],
  providers: [ShowService]
})

export class ShowEditComponent implements OnInit {
  @Input() selectedShow;

  constructor(private showService: ShowService) { }

  ngOnInit() {
  }

  updateShow(showToUpdate) {
    this.showService.updateShow(showToUpdate);
  }

}
