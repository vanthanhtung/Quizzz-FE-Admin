import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/table',         title: 'User',         icon:'nc-single-02',    class: '' },
    // { path: '/dashboard',     title: 'User Record',         icon:'nc-book-bookmark',       class: '' },
    { path: '/categories',    title: 'Categories',             icon:'nc-single-copy-04',    class: '' },
    { path: '/notifications', title: 'Exam',     icon:'nc-tile-56',    class: '' },
    // { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
   
    { path: '/typography',    title: 'Quiz',         icon:'nc-bullet-list-67', class: '' },
    // { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
    {path: '/logout', title: 'Logout', icon: 'nc-button-power', class: ''}
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
