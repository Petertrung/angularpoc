import { Component } from '@angular/core';

import * as XLSX from 'xlsx';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  data: any = [];
  rawData: any = [];
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';
  header: any[] = []
  tabs: string[] = [];
  activeTab = this.tabs[0];
  sheets: any = [];

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
      this.tabs = wb.SheetNames;
      this.activeTab = this.tabs[0];
        wb.SheetNames.forEach((sheetName: string) => {
        const sheet: any = wb.Sheets[sheetName];
        //console.log(sheet)
        this.sheets.push(XLSX.utils.sheet_to_json(sheet, { header: 1, range: undefined }));
      });

      this.data = this.sheets
      this.rawData = wb.Sheets;

    };
    reader.readAsBinaryString(target.files[0]);
  }
}
