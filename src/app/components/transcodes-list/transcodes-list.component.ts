import { Component, Input } from '@angular/core';
import { ITransCode } from 'src/app/models/transCode';

@Component({
  selector: 'app-transcodes-list',
  templateUrl: './transcodes-list.component.html',
  styleUrls: ['./transcodes-list.component.css']
})
export class TranscodesListComponent {

  @Input() transCodeInput!: ITransCode[]

  openTransCodeDetails(){}

}
