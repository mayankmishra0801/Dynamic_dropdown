
import { Component } from '@angular/core';

@Component({
  selector: 'app-jas',
  templateUrl: './jas.component.html',
  styleUrls: ['./jas.component.css']
})
export class JasComponent {


textareaValue: string = '';
selectedStartValue: string;
selectedValues: string[] = [];
startDropdownValues: string[] = [];
dropdownValuesArray: string[][] = [];

constructor() {
  this.selectedStartValue = '';
}


setDropdownValues() {
  this.selectedValues = [];
  this.dropdownValuesArray = [];

  if (this.selectedStartValue !== '') {
    const startValue = '*' + this.selectedStartValue;
    const lines = this.textareaValue.split('\n');
    let matchingStarFound = false;
    let currentLevel = 0;
    let dropdownLevel = 0; // Track the current dropdown level

    for (const line of lines) {
      if (line.startsWith(startValue)) {
        matchingStarFound = true;
      } else if (line.startsWith('*')) {
        if (matchingStarFound) {
          const starCount = line.match(/^\*+/)?.[0].length || 0;
          const trimmedLine = line.replace(/^\*+/, '').trim();

          if (starCount === currentLevel + 1) {
            if (!this.dropdownValuesArray[dropdownLevel]) {
              this.dropdownValuesArray[dropdownLevel] = [];
            }
            this.dropdownValuesArray[dropdownLevel].push(trimmedLine);
          } else if (starCount > currentLevel + 1) {
            currentLevel = starCount - 1;
            dropdownLevel = starCount - 2;
            if (!this.dropdownValuesArray[dropdownLevel]) {
              this.dropdownValuesArray[dropdownLevel] = [];
            }
            this.dropdownValuesArray[dropdownLevel].push(trimmedLine);
          } else if (starCount <= currentLevel) {
            break; // Stop iterating once we reach a line with a lower number of stars
          }
        }
      }
    }

    this.selectedValues = new Array(this.dropdownValuesArray.length);
  }
}



convertTextAreaValue() {
  this.startDropdownValues = this.textareaValue
    .split('\n')
    .filter(line => line.startsWith('*') && !line.startsWith('**'))
    .map(line => line.replace(/^\*+/, '').trim().replace(/\*/g, '')); // Trim stars from the beginning of the line and remove all stars
}


}














// setDropdownValues() {
//   this.selectedValues = [];
//   this.dropdownValuesArray = [];

//   if (this.selectedStartValue !== '') {
//     const startValue = '*' + this.selectedStartValue;
//     const lines = this.textareaValue.split('\n');
//     let matchingStarFound = false;
//     let currentLevel = 0;

//     for (const line of lines) {
//       if (line.startsWith(startValue)) {
//         matchingStarFound = true;
//       } else if (line.startsWith('*')) {
//         if (matchingStarFound && line.startsWith('*'.repeat(currentLevel + 2))) {
//           const trimmedLine = line.replace(/^\*+/, '').trim(); // Trim the stars from the beginning of the line
//           if (!this.dropdownValuesArray[currentLevel]) {
//             this.dropdownValuesArray[currentLevel] = [];
//           }
//           this.dropdownValuesArray[currentLevel].push(trimmedLine);
//         } else {
//           if (matchingStarFound) {
//             break; // Stop iterating once we reach a line with a lower number of stars
//           }
//         }
//       }
//     }

//     this.selectedValues = new Array(this.dropdownValuesArray.length);
//   }
// }
