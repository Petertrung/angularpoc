import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface properties {
  [key: string]: any;
  id?: number | undefined;
  name?: string | undefined;
  address1?: string | undefined;
  city?: string | undefined;
  state?: string | undefined;
  zip?: string | undefined;
  website?: string | undefined;
}

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss'],
})

export class PropertyComponent {
  constructor(private http: HttpClient, private router: Router) {}

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
  public propertyList: properties[] = [];
  public sortField = 'name';
  public sortDirection = 'asc';
  public current: properties = {}
  public indexModal: number | null = null;
  formModal: any;

  getList(): Observable<any> {
    return this.http.get<any>('./assets/Data/property.json');
  }

  ngOnInit(): void {
    this.getList().subscribe(data => {
      console.log('hi')
      this.propertyList = data;
    });
    this.formModal = document.getElementById("propertyModal");
  }

  openProperty(num: number | undefined) {
    if(num){
      this.router.navigate(['/property/' + num]);
    }
  }

  get filteredData(): properties[] {
    return this.propertyList
      .sort((a, b) => {
        if (a[this.sortField] < b[this.sortField]) {
          return this.sortDirection === 'asc' ? -1 : 1;
        }
        if (a[this.sortField] > b[this.sortField]) {
          return this.sortDirection === 'asc' ? 1 : -1;
        }
        return 0;
      });
  }

  sort(field: string) {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }
    this.propertyList = this.filteredData
  }

  //Modal
  openModal(index: number){
    this.formModal.style.display = 'block'
    this.indexModal = index
    this.current = this.propertyList[index]
  }

  closeModal(choice: string){
    this.formModal.style.display = 'none'
    if(choice == 'delete'){
      let indexNum: number| null = this.indexModal;
      if(indexNum || indexNum == 0){
        this.propertyList.splice(indexNum, 1);
      }
    }
    this.current = {}
  }

}
