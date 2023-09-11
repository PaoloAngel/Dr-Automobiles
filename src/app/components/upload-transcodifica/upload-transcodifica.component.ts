import { Component } from '@angular/core';
import { ITransCode } from 'src/app/models/transCode';
import { TranscodeService } from 'src/app/services/transcode.service';

@Component({
  selector: 'app-upload-transcodifica',
  templateUrl: './upload-transcodifica.component.html',
  styleUrls: ['./upload-transcodifica.component.css']
})
export class UploadTranscodificaComponent {

  transCodeData!: ITransCode

  constructor(private transcodeService: TranscodeService){}

  // HO PREVISTO LA LOGICA MA NON HO CAPITO COME E COSA CARICARE.

  onUpload(){
    if(this.transCodeData) {
      this.transcodeService.uploadTransCode(this.transCodeData).subscribe(res => {
        console.log('Upload successful', res);
      })
    } else {
      console.error('No data to upload');
    }
  }

  onDownload(){
    this.transcodeService.downloadTransCode().subscribe(
      (data) => {
        console.log('Download successful', data);
      },
      (error) => {
        console.error('Download failed', error);
      }
    );
  }

  onSave(){
  }

  onDelete(){
  }


}
