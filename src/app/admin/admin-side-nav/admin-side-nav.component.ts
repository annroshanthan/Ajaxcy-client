import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-side-nav',
  templateUrl: './admin-side-nav.component.html',
  styleUrls: ['./admin-side-nav.component.scss']
})
export class AdminSideNavComponent implements OnInit {
  @Input() sidenavStyle!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
