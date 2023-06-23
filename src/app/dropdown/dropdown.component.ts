import { Component,OnInit } from '@angular/core';

interface Group {
  name: string;
  children: Group[];
}
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit{





  textAreaContent: string;
  constructor(){
    this.textAreaContent = '';

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');


  }




  updateDropdown(): void {
    // Process the steps/instructions from the textarea
    const lines = this.textAreaContent.split('\n');
    const dropdownOptions = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const indentation = line.search(/\S|$/);

      if (indentation === 0) {
        // First level option group
        dropdownOptions.push({ value: line.trim(), children: [] });
      } else {
        // Nested option
        const parentIndex = indentation / 2 - 1;
        const option = { value: line.trim(), children: [] };
        this.insertOptionInParent(option, dropdownOptions[parentIndex]);
      }
    }

    // Use the generated dropdownOptions array to update the dynamic dropdown in your application
    console.log(dropdownOptions);
  }

  insertOptionInParent(option: any, parent: any): void {
    if (parent.children) {
      parent.children.push(option);
    } else {
      parent.children = [option];
    }
  }

    groups: Group[] = [
    {
      name: 'Group 1',
      children: [
        { name: 'Group 1-1', children: [] },
        { name: 'Group 1-2', children: [] }
      ]
    },{
      name:'Group 1-1',
      children:[
        {name:'Group 1-1-1',children:[]},
        {name:'Group 1-1-2',children:[]},

      ]
    },
    {
      name: 'Group 2',
      children: [
        {
          name: 'Group 2-1',
          children: [
            { name: 'Group 2-1-1', children: [] },
            { name: 'Group 2-1-2', children: [] }
          ]
        },
        { name: 'Group 2-2', children: [] }
      ]
    },
    {
      name: 'Group 3',
      children: [
        { name: 'Group 3-1', children: [] },
        { name: 'Group 3-2', children: [] },
        {
          name: 'Group 3-3',
          children: [
            { name: 'Group 3-3-1', children: [] },
            { name: 'Group 3-3-2', children: [] },
            { name: 'Group 3-3-3', children: [] }
          ]
        }
      ]
    }
  ];

  selectedGroup: Group = this.groups[0];
  selectedChildGroup:Group = this.groups[0];

//   updateDropdown(): void {
//     // Process the steps/instructions from the textarea
//     const lines = this.textAreaContent.split('\n');
//     const dropdownOptions: Group[] = [];

//     for (let i = 0; i < lines.length; i++) {
//       const line = lines[i];
//       const indentation = line.search(/\S|$/);

//       if (indentation === 0) {
//         // First level option group
//         dropdownOptions.push({ name: line.trim(), children: [] });
//       } else {
//         // Nested option
//         const parentIndex = indentation / 2 - 1;
//         const option = { name: line.trim(), children: [] };
//         this.insertOptionInParent(option, dropdownOptions[parentIndex]);
//       }
//     }

//     // Use the generated dropdownOptions array to update the dynamic dropdown in your application
//     console.log(dropdownOptions);
//   }
// }

// // Move this method outside the DropdownComponent class
// function insertOptionInParent(option: any, parent: any): void {
//   if (parent.children) {
//     parent.children.push(option);
//   } else {
//     parent.children = [option];
//   }
// }


}


















































































  // interface Group {
  //   name: string;
  //   children: Group[];
  //   showChildren?: boolean;
  // }


  // showGroup1: boolean = false;
  // showGroup2: boolean = false;
  // showGroup3: boolean = false;



  // toggleGroup1() {
  //   this.showGroup1 = !this.showGroup1;
  // }
  // toggleGroup2() {
  //   this.showGroup2 = !this.showGroup2;
  // }
  // toggleGroup3() {
  //   this.showGroup3 = !this.showGroup3;
  // }



  // groups: any[] = [
  //   {
  //     name: 'Group 1',
  //     children: [
  //       { name: 'Group 1-1', children: [] },
  //       { name: 'Group 1-2', children: [] }
  //     ]
  //   },
  //   {
  //     name: 'Group 2',
  //     children: [
  //       {
  //         name: 'Group 2-1',
  //         children: [
  //           { name: 'Group 2-1-1', children: [] },
  //           { name: 'Group 2-1-2', children: [] }
  //         ]
  //       },
  //       { name: 'Group 2-2', children: [] }
  //     ]
  //   },
  //   {
  //     name: 'Group 3',
  //     children: [
  //       { name: 'Group 3-1', children: [] },
  //       { name: 'Group 3-2', children: [] },
  //       {
  //         name: 'Group 3-3',
  //         children: [
  //           { name: 'Group 3-3-1', children: [] },
  //           { name: 'Group 3-3-2', children: [] },
  //           { name: 'Group 3-3-3', children: [] }
  //         ]
  //       }
  //     ]
  //   }
  // ];

  // ngOnInit() {
  //   // You can perform any initialization here if needed
  // }




//   showGroup1: boolean = false;

//   toggleGroup1() {
//     this.showGroup1 = !this.showGroup1;
//   }
// //  groups:any;
//   const groups = [
//     {
//       name: 'Group 1',
//       children: [
//         { name: 'Group 1-1', children: [] },
//         { name: 'Group 1-2', children: [] }
//       ]
//     },
//     {
//       name: 'Group 2',
//       children: [
//         {
//           name: 'Group 2-1',
//           children: [
//             { name: 'Group 2-1-1', children: [] },
//             { name: 'Group 2-1-2', children: [] }
//           ]
//         },
//         { name: 'Group 2-2', children: [] }
//       ]
//     },
//     {
//       name: 'Group 3',
//       children: [
//         { name: 'Group 3-1', children: [] },
//         { name: 'Group 3-2', children: [] },
//         {
//           name: 'Group 3-3',
//           children: [
//             { name: 'Group 3-3-1', children: [] },
//             { name: 'Group 3-3-2', children: [] },
//             { name: 'Group 3-3-3', children: [] }
//           ]
//         }
//       ]
//     }
//   ];


// groups: Group[] = [
//   {
//     name: 'Group 1',
//     children: [
//       { name: 'Group 1-1', children: [] },
//       { name: 'Group 1-2', children: [] }
//     ]
//   },
//   {
//     name: 'Group 2',
//     children: [
//       {
//         name: 'Group 2-1',
//         children: [
//           { name: 'Group 2-1-1', children: [] },
//           { name: 'Group 2-1-2', children: [] }
//         ]
//       },
//       { name: 'Group 2-2', children: [] }
//     ]
//   },
//   {
//     name: 'Group 3',
//     children: [
//       { name: 'Group 3-1', children: [] },
//       { name: 'Group 3-2', children: [] },
//       {
//         name: 'Group 3-3',
//         children: [
//           { name: 'Group 3-3-1', children: [] },
//           { name: 'Group 3-3-2', children: [] },
//           { name: 'Group 3-3-3', children: [] }
//         ]
//       }
//     ]
//   }
// ];

// toggleGroup(group: Group) {
//   group.showChildren = !group.showChildren;
// }
// btn.onclick(()=>{
//   let value = btn.value;
//   value = `*Group 1
//   **Group 1-1
//   **Group 1-2
//   *Group2
//   **Group 2-1
//   **Group 2-2
//   *Group 3
//   `
// })















