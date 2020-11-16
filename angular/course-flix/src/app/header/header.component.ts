import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAdmin: boolean;

  ngOnInit(): void {
    this.isAdmin = localStorage.getItem('admin') !== null;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isAdmin = localStorage.getItem('admin') !== null;
  }

}
