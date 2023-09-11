import { Component, OnInit } from '@angular/core';
import { ITransCode } from 'src/app/models/transCode';
import { TranscodeService } from 'src/app/services/transcode.service';

@Component({
  selector: 'app-transcode',
  templateUrl: './transcode.component.html',
  styleUrls: ['./transcode.component.css']
})
export class TranscodeComponent implements OnInit{

  transCode: ITransCode[] = []

  constructor(private transCodeService: TranscodeService){}
  ngOnInit(): void {
    this.transCodeService.getTransCode().subscribe(data => {
      this.transCode = data
    })
  }

  getSearchResults(transCodes: ITransCode[]) {
    this.transCode = transCodes;
  }

}
