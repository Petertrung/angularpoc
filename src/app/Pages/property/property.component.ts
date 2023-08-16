import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface propertyList {
  [key: string]: number | string;
  id: number;
  name: string;
  address1: string;
  city: string;
  state: string;
  zip: string;
  website: string;
}


@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss'],
})
export class PropertyComponent {
  propertyList = [
    {
      id: 1234567,
      name: 'Property 1',
      address1: '123 Main St',
      city: 'Seattle',
      state: 'WA',
      zip: '98101',
      website: 'https://www.property1.com',
    },
    {
      id: 1234566,
      name: 'Property 2',
      address1: '456 Pine St',
      city: 'Bellevue',
      state: 'WA',
      zip: '98004',
      website: 'https://www.property2.com',
    },
    {
      id: 1234557,
      name: 'Property 3',
      address1: '789 Oak St',
      city: 'Redmond',
      state: 'WA',
      zip: '98052',
      website: 'https://www.property3.com',
    },
    {
      id: 1233567,
      name: 'Property 4',
      address1: '1011 Elm St',
      city: 'Kirkland',
      state: 'WA',
      zip: '98033',
      website: 'https://www.property4.com',
    },
    {
      id: 1224567,
      name: 'Property 5',
      address1: '1213 Cedar St',
      city: 'Issaquah',
      state: 'WA',
      zip: '98027',
      website: 'https://www.property5.com',
    },
    {
      id: 1134567,
      name: 'Property 6',
      address1: '1415 Fir St',
      city: 'Sammamish',
      state: 'WA',
      zip: '98074',
      website: 'https://www.property6.com',
    },
    {
      id: 234567,
      name: 'Property 7',
      address1: '1617 Maple St',
      city: 'Mercer Island',
      state: 'WA',
      zip: '98040',
      website: 'https://www.property7.com',
    },
    {
      id: 1234565,
      name: 'Property 8',
      address1: '1819 Pine St',
      city: 'Bothell',
      state: 'WA',
      zip: '98011',
      website: 'https://www.property8.com',
    },
    {
      id: 1234564,
      name: 'Property 9',
      address1: '2021 Cedar St',
      city: 'Queen Anne',
      state: 'WA',
      zip: '98109',
      website: 'https://www.property9.com',
    },
    {
      id: 1234563,
      name: 'Property 10',
      address1: '2223 Pine St',
      city: 'Capitol Hill',
      state: 'WA',
      zip: '98112',
      website: 'https://www.property10.com',
    },
    {
      id: 1234562,
      name: 'Property 11',
      address1: '2425 Cedar St',
      city: 'Green Lake',
      state: 'WA',
      zip: '98103',
      website: 'https://www.property11.com',
    },
    {
      id: 1234561,
      name: 'Property 12',
      address1: '2627 Pine St',
      city: 'Ballard',
      state: 'WA',
      zip: '98107',
      website: 'https://www.property12.com',
    },
    {
      id: 1234560,
      name: 'Property 13',
      address1: '2829 Cedar St',
      city: 'Belltown',
      state: 'WA',
      zip: '98121',
      website: 'https://www.property13.com',
    },
    {
      id: 1234547,
      name: 'Property 14',
      address1: '3031 Pine St',
      city: 'Fremont',
      state: 'WA',
      zip: '98103',
      website: 'https://www.property14.com',
    },
    {
      id: 1234537,
      name: 'Property 15',
      address1: '3233 Cedar St',
      city: 'Wallingford',
      state: 'WA',
      zip: '98103',
      website: 'https://www.property15.com',
    },
    {
      id: 1234527,
      name: 'Property 16',
      address1: '3435 Pine St',
      city: 'University District',
      state: 'WA',
      zip: '98105',
      website: 'https://www.property16.com',
    },
  ];

  tableHeaders = [
    { name: 'Property Name', field: 'name', sort: true, filter: true },
    { name: 'Address 1', field: 'address1', sort: true, filter: true },
    { name: 'City', field: 'city', sort: true, filter: true },
    { name: 'State', field: 'state', sort: true, filter: true },
    { name: 'Zip', field: 'zip', sort: true, filter: true },
    { name: 'Website', field: 'website', sort: false, filter: false },
    { name: 'Structure', field: 'structure', sort: false, filter: false },
    { name: 'Action', field: 'action', sort: false, filter: false },
  ];

  constructor(private router: Router) {}
  public sortField = 'name';
  public sortDirection = 'asc';

  openProperty(num: number) {
    this.router.navigate(['/property/' + num]);
  }

  // get filteredData(): propertyList[] {
  //   return this.data
  //     .sort((a, b) => {
  //       if (a[this.sortField] < b[this.sortField]) {
  //         return this.sortDirection === 'asc' ? -1 : 1;
  //       }
  //       if (a[this.sortField] > b[this.sortField]) {
  //         return this.sortDirection === 'asc' ? 1 : -1;
  //       }
  //       return 0;
  //     });
  // }

  sort(field: string) {
    console.log(field)
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }
  }

}
