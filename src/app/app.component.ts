import { Component, OnInit } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private tooltipService: NgbTooltip) {}

  ngOnInit(): void {
    this.tooltipService.autoClose = false;
    this.tooltipService.placement = 'top';
    this.tooltipService.triggers = 'hover';
  }
  title = 'Angular';
}
