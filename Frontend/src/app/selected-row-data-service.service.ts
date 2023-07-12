import { Injectable } from '@angular/core';
import { Train } from './train';

@Injectable({
  providedIn: 'root'
})
export class SelectedRowDataServiceService {

  constructor() { }

  private selectedRowData: Train;

  setSelectedRowData(rowData: Train) {
    this.selectedRowData = rowData;
  }

  getSelectedRowData() {
    return this.selectedRowData;
  }
}
