import { Component } from '@angular/core';

// https://www.ag-grid.com/javascript-data-grid/global-style-upgrading-to-v28-css/
// https://www.ag-grid.com/javascript-data-grid/themes/
// https://www.ag-grid.com/angular-data-grid/videos/
// https://www.youtube.com/watch?v=_cRDVM6NlPk&list=PLsZlhayVgqNw6VHFn4j6FcJM5vLACsf0x
// https://stackblitz.com/edit/aggrid-angular10-alignedgridoverlap-x3vnk6?file=src%2Fapp%2Fapp.module.ts

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-test-ag-grid';

  colDefs = [
    { headerName: 'Make', field: 'make', sortable: true, filter: true },
    { headerName: 'Model', field: 'model', sortable: true, filter: true },
    { headerName: 'Price', field: 'price', sortable: true, filter: true }
  ];

  rowData: any[] = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ];

  constructor() {
  }
}