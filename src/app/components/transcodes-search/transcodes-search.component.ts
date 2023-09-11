import { Component, EventEmitter, Output } from '@angular/core';
import { TranscodeService } from 'src/app/services/transcode.service';

@Component({
  selector: 'app-transcodes-search',
  templateUrl: './transcodes-search.component.html',
  styleUrls: ['./transcodes-search.component.css']
})
export class TranscodesSearchComponent {
  searchTerm: string = '';

  @Output() searchResultsOutput = new EventEmitter<any[]>();

  constructor(private transcodeService: TranscodeService){}

  onSearchTransCode(){
    console.log('Click Funziona')
    if (this.searchTerm) {
      this.transcodeService.searchTransCode(this.searchTerm).subscribe((transCodes) => {
        this.searchResultsOutput.emit(transCodes);
        console.log(transCodes)
      });
    }
  }
}

