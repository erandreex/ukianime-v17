import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { SharedService, rutas } from '../../services/shared.service';
import { Subscription } from 'rxjs';
import { ModalCustomizesComponent } from '../modal-customizes/modal-customizes.component';

@Component({
    selector: 'app-sidenav',
    standalone: true,
    imports: [CommonModule, RouterModule, ModalCustomizesComponent],
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.css',
})
export class SidenavComponent {
    public backgroundO: boolean = false;
    public rutas: rutas[] = [];

    public sizeOpen: string = '0px';
    private subscription!: Subscription;

    constructor(private sharedService: SharedService, private router: Router) {
        this.subscription = this.sharedService.sidenavAction$.subscribe((value) => {
            this.action(value);
        });

        this.rutas = this.sharedService.rutas;

        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.action('cerrar');
            }
        });
    }

    action(value: string) {
        if (value === 'abrir') {
            this.sizeOpen = '250px';
            this.backgroundO = true;
        }
        if (value === 'cerrar') {
            this.sizeOpen = '0px';
            this.backgroundO = false;
        }
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
