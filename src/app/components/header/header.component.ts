import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';
import { SharedService, rutas } from '../../services/shared.service';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent {
    public rutas: rutas[] = [];

    constructor(private sharedService: SharedService, private NavigationService: NavigationService) {
        this.rutas = this.sharedService.rutas;
    }

    back() {
        this.NavigationService.back();
    }

    sidenav(action: string) {
        this.sharedService.alertSidenav(action);
    }
}
