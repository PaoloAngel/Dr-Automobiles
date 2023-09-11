import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISuppliers } from 'src/app/models/suppliers';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css']
})
export class SupplierDetailsComponent {

  // USER INPUT FIELDS
  @Input() supplierName!: string;
  @Input() businessName!: string;
  @Input() code!: string;
  @Input() email!: string;

  @Input() host!: string;
  @Input() endPoint!: string;
  @Input() authApi: string[] = []; // <-- ADDED
  @Input() apiKey!: number;
  @Input() handler!: string;

  // Bind the selected value from the dropdown
  public selectedAuthApi: string = 'apiKey2';

  // BUTTONS SUPPLIER DETAILS ADD / DELETE / SAVE
  @Input() isSupplierDetailsShown = false;
  @Output() hideSupplierDetails = new EventEmitter<void>();
  @Output() addNewSupplier = new EventEmitter<void>()

  @Input() supplier: ISuppliers | null = null;

  ngOnInit() {
  }

  onAddNewSupplier(){
    this.addNewSupplier.emit()
  }

  onDelete(){
    console.log('onDelete called');
    this.isSupplierDetailsShown = false;
    this.hideSupplierDetails.emit();
  }

  onSave(){
    this.isSupplierDetailsShown = true;
    this.addNewSupplier.emit();
  }

}

