import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private scroller: ViewportScroller) {}

  ngOnInit(): void {}

  scroll(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
  menuShow = false;
  showMenu() {
    this.menuShow = true;
    document.getElementById('menuResponsive').classList.toggle('hide');
    document.getElementById('menuResponsive').classList.add('menu-animation');
    console.log(this.menuShow);
  }

  hideMenu() {
    this.menuShow = false;
    document.getElementById('menuResponsive').classList.toggle('hide');
    document.getElementById('menuResponsive').classList.add('menu-animation');
    console.log(this.menuShow);
  }
}
