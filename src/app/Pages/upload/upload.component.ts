import { Component } from '@angular/core';

import * as XLSX from 'xlsx';

type AOA = any[][];

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  data: AOA = [];
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';
  header: any[] = []
  tabs: string[] = [];
  activeTab = this.tabs[0];

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      this.tabs = wb.SheetNames;
      this.activeTab = this.tabs[0];
      const ws: XLSX.WorkSheet = wb.Sheets;
      console.log(this.tabs);

      /* save data */
      this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
      //this.header = this.data.splice(0,1)[0];
      console.log(this.data);
    };
    reader.readAsBinaryString(target.files[0]);
  }
}
