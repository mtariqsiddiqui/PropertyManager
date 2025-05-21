import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from '@angular/material/table';
import {MatSort, MatSortHeader} from '@angular/material/sort';

@Component({
  selector: 'app-project',
  imports: [
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatPaginator,
    MatRow,
    MatRowDef,
    MatSort,
    MatSortHeader,
    MatTable,
    MatPaginator,
    MatSort
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  projectForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.projectForm = this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
  }
  createProject() {
    console.log(this.projectForm.value);
  }
}




import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { AddrssDataSource, AddrssItem } from './addrss-datasource';

@Component({
  selector: 'app-addrss',
  templateUrl: './addrss.component.html',
  styleUrl: './addrss.component.css',
  imports: [MatTableModule, MatPaginatorModule, MatSortModule]
})
export class AddrssComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<AddrssItem>;
  dataSource = new AddrssDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
