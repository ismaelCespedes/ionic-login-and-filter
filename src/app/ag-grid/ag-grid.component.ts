import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss'],
})
export class AgGridComponent {
  @Input() ColumnDefs: any;
  @Input() RowData: any;
  @Input() IsColumnsToFit: boolean = true;

  gridApi: any;
  gridColumnApi: any;

  BindData(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.setRowData(this.RowData);

    params.api.onFirstDataRendered= onFirstDataRenderedFunction;

    function onFirstDataRenderedFunction() {
      this.gridApi.sizeColumnsToFit();
    }

  }


}
