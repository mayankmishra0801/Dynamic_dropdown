import { Component } from '@angular/core';
// interface DropdownOption {
//   text: string;
//   value: string;
//   level: number;
// }
@Component({
  selector: 'app-abcde',
  templateUrl: './abcde.component.html',
  styleUrls: ['./abcde.component.css']
})
export class AbcdeComponent {

textareaValue: string = '';
selectedStartValue: string;
selectedSecondValue: string;
startDropdownValues: string[] = [];
secondDropdownValues: string[] = [];

constructor() {
  this.selectedStartValue = '';
  this.selectedSecondValue = '';
}

setSecondDropdown() {
  this.selectedSecondValue = '';
  this.secondDropdownValues = [];

  if (this.selectedStartValue !== '') {
    const startValue = '*' + this.selectedStartValue;
    const lines = this.textareaValue.split('\n');
    let matchingStarFound = false;
    let oneStarHigherFound = false;

    for (const line of lines) {
      if (line.startsWith(startValue)) {
        matchingStarFound = true;
      } else if (line.startsWith('*')) {
        if (matchingStarFound && line.startsWith('**')) {
          const trimmedLine = line.slice(2).trim(); // Trim the line and remove the stars
          this.secondDropdownValues.push(trimmedLine);
          oneStarHigherFound = true;
        } else {
          if (oneStarHigherFound) {
            break; // Stop iterating once we reach a line with more than one star
          }
        }
      }
    }
  }
}

convertTextAreaValue() {
  this.startDropdownValues = this.textareaValue
    .split('\n')
    .filter(line => line.startsWith('*') && !line.startsWith('**'))
    .map(line => line.slice(1).trim().replace(/\*/g, '')); // Trim and remove all stars
}

}







