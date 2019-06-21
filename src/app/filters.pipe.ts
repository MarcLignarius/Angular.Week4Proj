import { Pipe, PipeTransform } from '@angular/core';
import { Show } from './models/show.model';
import { OnInit } from '@angular/core';

@Pipe({
  name: "filters",
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(input: Show[], chosenCategory) {
    var output: Show[] = [];
    if(chosenCategory != "all") {
      input.forEach(eachInput => {
        if(eachInput.category === chosenCategory) {
          output.push(eachInput);
        }
      });
      return output;
    }
    else {
    return input;
    }
  }
}
