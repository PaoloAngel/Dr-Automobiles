import { Component } from '@angular/core';
import { ISuppliers } from 'src/app/models/suppliers';
import { SuppliersService } from 'src/app/services/suppliers.service';


@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent {

  constructor(private suppliersService: SuppliersService) { }

  suppliers: ISuppliers[] = [];
  selectedSupplier: ISuppliers | null = null;
  isSupplierDetailsShown = false;

  ngOnInit(): void {
    this.suppliersService.getSuppliers().subscribe(data => {
      this.suppliers = data
    })
  }

  onSupplierSelected(supplier: ISuppliers) {
    this.selectedSupplier = supplier;
    this.isSupplierDetailsShown = true;
  }

  hideSupplierDetails() {
    console.log('hideSupplierDetails called');
    this.isSupplierDetailsShown = false;
  }

  onAddNewSupplier() {
    this.selectedSupplier = null;
    this.isSupplierDetailsShown = true;
  }

}
