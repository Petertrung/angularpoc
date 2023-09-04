import { Component, Input } from '@angular/core';
import * as XLSX from 'xlsx';

interface Property {
  Address_Street_Prior: string;
  Address_Street_Current: string;
  Address_City: string;
  Address_State: string;
  Address_Zip: string;
  Parcel_Identification_Number: string;
  Owner_Name: string;
  Owner_Representative: string;
  Managing_Member_or_General_Partner: string;
  Property_Name_Prior: string;
  Property_Name_Current: string;
  Website: string;
  Tax_Assessor_Parcel_Numbers: string[];
  Master_Use_Permit: string;
  Demolition_Permit: boolean;
  Demo_Permit_Application_Complete_Date: Date;
  Demo_Permit_4_Plus_Unit_Structure: boolean;
  Demo_Permit_Structure_Occupied_Within_18_Months_of_Date_When_Application_for_the_Applicable_Permit_is_Completed: boolean;
  Structures_Number: number;
  Towers_Freestanding_Number: number;
  Towers_on_Podium_Number: number;
  Annual_Certification_Year: number;
  Annual_Certification_Status: string;
  Audit_Status: string;
  Audit_Start_Date: Date;
  Audit_End_Date: Date;
  Inspection_Status: string;
  Inspection_Start_Date: Date;
  Inspection_End_Date: Date;
  Compliance_Training_Date: Date;
}

interface Structure {
  Addresses_Street: string[];
  Building_ID: string;
  Structure_Name: string;
  Housing_Status: string;
  Building_Permit: boolean;
  Zone_Category: string;
  Zone: string;
  Floors_Number: number;
  Floor_Area_Residential_Use: number;
  Floor_Area_Non_Residential_Use: number;
  Floor_Area_Total: number;
  Floor_Area_Permanent_Residential_Occupancy: number;
  Congregate_Residence: boolean;
  Certificate_of_Occupancy_Date: Date;
}

interface Unit {
  Unit_ID_Plan_Set: string;
  Unit_ID_Final: string;
  Level: string;
  Floor_Plan_ID: string;
  Floor_Area_Square_Feet: number;
  Floor_Area_Net_or_Gross: string;
  Proposed_Unit_Type: string;
  Proposed_Number_of_Bedrooms: number;
  Type_of_Bedrooms: string;
  Full_Bathrooms_Number: number;
  Three_Quarter_Bathrooms_Number: number;
  Half_Bathrooms_Number: number;
  Quarter_Bathrooms_Number: number;
  Total_Number_of_Bathrooms: number;
  ADA_Unit: boolean;
  Interior_Amenities: string[];
  Exterior_Amenities: string[];
  Unit_Type_for_AMI_Limit: string;
  Number_of_Bedrooms_for_AMI_Limit: number;
  Designation: string[];
  MFTE: boolean;
  IZ: boolean;
  MHA: boolean;
  MPC_YT: boolean;
  Surplus_Property: boolean;
  Reduced_Minimum_Parking: boolean;
  Other_Notes: string[];
  Notes_Type: string[];
  Date: Date;
  Author_Name: string;
  Note: string;
}




@Component({
  selector: 'app-uploadform',
  templateUrl: './uploadform.component.html',
  styleUrls: ['./uploadform.component.scss']
})
export class UploadformComponent {
  @Input() data = '';
  @Input() activeTab = '';
  newData: any[] = []
  sheets: { name: string, header: string | number, interface: {} }[] = [
    {
      name: 'AGREEMENTS',
      header: 'D',
      interface: {},
    },
    {
      name: 'PROPERTY',
      header: 'B',
      interface: 'Property',
    }, {
      name: 'STRUCTURES',
      header: 'B',
      interface: {},
    },{
      name: 'Units - Structure 1',
      header: 13,
      interface: {},
    }, {
      name: 'Units - Structure 2',
      header: 13,
      interface: {},
    }, {
      name: 'Units - Structure 3',
      header: 13,
      interface: {},
    }, {
      name: 'Units - Structure 4',
      header: 13,
      interface: {},
    },{
      name: 'Units - TH RH or Cottage',
      header: 8,
      interface: {},
    }];

  ngOnInit() {
    //console.log(this.sheets)
    this.sheets.forEach((sheets: any) => {
      const sheet: any = this.data[sheets.name];
      //this.newData.push(XLSX.utils.sheet_to_json(sheet, { header: 1, range: undefined }));
      const data = []
  const rows = sheet['!ref'].split(':')[1].match(/\d+/)[0];
  const cols = sheet['!ref'].split(':')[1].match(/[A-Z]+/)[0];
  for (let i = 2; i <= rows; i++) {
    const row:any = [];
    for (let j = 'A'; j <= cols; j = String.fromCharCode(j.charCodeAt(0) + 1)) {
      const cell = sheet[j + i];
      if (cell && cell.v) {
        row[j] = cell.v;
      }
    }
    data.push(row);
  }
  this.newData.push({
    name:sheets.name,
    header:[],
    data:data
  })
    });
    console.log(this.newData)
  }
}
