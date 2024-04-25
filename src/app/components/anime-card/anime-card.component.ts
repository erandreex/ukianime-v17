import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Data } from '../../models/anime.interface';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-anime-card',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './anime-card.component.html',
    styleUrl: './anime-card.component.css',
})
export class AnimeCardComponent {
    @Input('height') height: string = '100%';
    @Input('width') width: string = '100%';
    @Input('anime') anime: Data | null = null;
    @Input('ranking') ranking: number = 0;

    public viewImage: boolean = false;
    public browse: boolean = false;
    public averageRating = 0;

    public subscription!: Subscription;

    constructor() {}

    ngOnInit(): void {}

    @ViewChild('lImage') lImage!: ElementRef;

    load() {
        setTimeout(() => {
            this.viewImage = true;
        }, 500);
    }

    ngOnChanges() {
        this.averageRating = Math.floor(this.ranking);
    }
}
