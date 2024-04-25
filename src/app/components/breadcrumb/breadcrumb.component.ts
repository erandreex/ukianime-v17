import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-breadcrumb',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './breadcrumb.component.html',
    styleUrl: './breadcrumb.component.css',
})
export class BreadcrumbComponent {
    public breadcrumbs: string[] = [];

    constructor(private router: Router) {
        this.breadcrumbs = this.router.url.split('/');
        this.breadcrumbs.shift();
    }

    ngOnInit(): void {
        this.router.events.subscribe((value) => {
            if (value instanceof NavigationEnd) {
                this.breadcrumbs = value.url.split('/');
                this.breadcrumbs.shift();
            }
        });
    }
}
