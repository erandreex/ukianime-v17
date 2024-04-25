import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface rutas {
    path: string;
    name: string;
}

@Injectable({
    providedIn: 'root',
})
export class SharedService {
    constructor() {}

    public rutas: rutas[] = [
        {
            path: '',
            name: 'Home',
        },
        {
            path: 'team',
            name: 'Team',
        },
        {
            path: 'tools',
            name: 'Tools',
        },
        {
            path: 'search',
            name: 'Search',
        },
    ];

    private accountAction = new Subject<any>();
    accountAction$ = this.accountAction.asObservable();

    alertAccount(action: string) {
        this.accountAction.next(action);
    }

    private sidenavAction = new Subject<any>();
    sidenavAction$ = this.sidenavAction.asObservable();

    private backgroundAction = new Subject<any>();
    backgroundAction$ = this.backgroundAction.asObservable();

    alertSidenav(action: string) {
        this.sidenavAction.next(action);
    }

    alertBackground(action: string) {
        this.backgroundAction.next(action);
    }
}
