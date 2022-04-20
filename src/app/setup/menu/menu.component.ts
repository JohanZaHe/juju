import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  navLinks = [
    {
      label: 'characters',
      path: 'characters',
      icon: 'people_outline',
    },
    {
      label: 'notifications',
      path: 'notifications',
      icon: 'notifications_none',
    },
    {
      label: 'settings',
      path: 'settings',
      icon: 'swap_vert',
    },
    {
      label: 'favorites',
      path: 'favorites',
      icon: 'favorite_border',
    },
    {
      label: 'history',
      path: 'history',
      icon: 'history',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
