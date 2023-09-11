import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISuppliers } from 'src/app/models/suppliers';

@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.css']
})
export class SuppliersListComponent {

  @Input() suppliersInput!: ISuppliers[];
  @Output() supplierSelectedOutPut = new EventEmitter<ISuppliers>();

  selectSupplierName!: string ;
  selectBusinessName!: string;
  selectCode!: string;
  selectEmail!: string;


  constructor() { }

  openSupplierDetails(supplier: ISuppliers) {
    this.supplierSelectedOutPut.emit(supplier);
  }

}

