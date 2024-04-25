import { ChangeDetectorRef, Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { Subscription, delay } from 'rxjs';
import { StylesService, styles } from './services/styles.service';
import { HeaderComponent } from './components/header/header.component';
import { SharedService } from './services/shared.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent, SidenavComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    public title = 'Ukianime';
    public load: boolean = true;
    public background: string = 'fondo';

    public styles: string[] = [];

    private subscriptionStyles!: Subscription;
    public subscription!: Subscription;

    constructor(private stylesService: StylesService, private sharedService: SharedService) {
        this.addStyles(this.stylesService.styleLogic);

        this.subscriptionStyles = this.stylesService.changeStyles$.subscribe((styles) => {
            this.addStyles(styles);
        });

        this.subscription = this.sharedService.backgroundAction$.pipe(delay(100)).subscribe((value) => {
            this.background = value;
        });
    }

    addStyles(styles: styles) {
        this.styles = Object.values(styles);
    }

    ngOnDestroy(): void {
        this.subscriptionStyles.unsubscribe();
        this.subscription.unsubscribe();
    }
}
