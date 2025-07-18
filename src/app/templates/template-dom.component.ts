import { Component, inject } from '@angular/core';
import {
  DataTableColumnCellDirective,
  DataTableColumnDirective,
  DataTableColumnHeaderDirective,
  DatatableComponent
} from '@siemens/ngx-datatable';

import { Employee } from '../data.model';
import { DataService } from '../data.service';

@Component({
  selector: 'inline-templates-demo',
  imports: [
    DatatableComponent,
    DataTableColumnDirective,
    DataTableColumnHeaderDirective,
    DataTableColumnCellDirective
  ],
  template: `
    <div>
      <h3>
        Expressive Templates
        <small>
          <a
            href="https://github.com/siemens/ngx-datatable/blob/main/src/app/templates/template-dom.component.ts"
            target="_blank"
          >
            Source
          </a>
        </small>
      </h3>
      <ngx-datatable
        class="material"
        rowHeight="auto"
        columnMode="force"
        [rows]="rows"
        [headerHeight]="50"
        [footerHeight]="50"
      >
        <ngx-datatable-column name="Name">
          <ng-template let-column="column" ngx-datatable-header-template>
            Holla! {{ column.name }}
          </ng-template>
          <ng-template let-value="value" ngx-datatable-cell-template>
            Hi: <strong>{{ value }}</strong>
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Gender">
          <ng-template let-column="column" let-sort="sortFn" ngx-datatable-header-template>
            <span (click)="sort()">{{ column.name }}</span>
          </ng-template>
          <ng-template let-row="row" let-value="value" ngx-datatable-cell-template>
            My name is: <i [innerHTML]="row['name']"></i> and <i>{{ value }}</i>
            <div>{{ joke }}</div>
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Age">
          <ng-template let-value="value" ngx-datatable-cell-template>
            <div style="border:solid 1px #ddd;margin:5px;padding:3px">
              <div style="background:#999;height:10px" [style.width]="value + '%'"></div>
            </div>
          </ng-template>
        </ngx-datatable-column>
      </ngx-datatable>
    </div>
  `
})
export class InlineTemplatesComponent {
  rows: Employee[] = [];
  joke = 'knock knock';

  private dataService = inject(DataService);

  constructor() {
    this.dataService.load('company.json').subscribe(data => {
      this.rows = data.splice(0, 5);
    });
  }
}
