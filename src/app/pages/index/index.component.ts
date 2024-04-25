import { Component } from '@angular/core';
import { Data } from '../../models/anime.interface';
import { AnimesService } from '../../services/animes.service';
import { take } from 'rxjs';
import { CarrouselComponent } from '../../components/carrousel/carrousel.component';

@Component({
    selector: 'app-index',
    standalone: true,
    imports: [CarrouselComponent],
    templateUrl: './index.component.html',
    styleUrl: './index.component.css',
})
export class IndexComponent {
    public trendings: Data[] | any = [];
    public error1: boolean = false;

    public action: Data[] | any = [];
    public error2: boolean = false;

    public vampire: Data[] | any = [];
    public error3: boolean = false;

    public adventure: Data[] | any = [];
    public error4: boolean = false;

    public mistery: Data[] | any = [];
    public error5: boolean = false;

    public supernatural: Data[] | any = [];
    public error6: boolean = false;

    public drama: Data[] | any = [];
    public error7: boolean = false;

    constructor(private animesService: AnimesService) {}

    ngOnInit(): void {
        this.trending();
        this.categories();
        this.genres();
    }

    trending() {
        this.animesService.trendings().subscribe(
            (data) => {
                if (data.error) {
                    this.error1 = true;
                    return;
                }
                this.trendings = data;
            },
            (err) => {
                console.log(err);
            }
        );
    }

    categories() {
        this.animesService
            .animesPorCategoriaGenero('Action')
            .pipe(take(1))
            .subscribe((data) => {
                if (data.error) {
                    this.error2 = true;
                    return;
                }
                this.action = data;
            });

        this.animesService
            .animesPorCategoriaGenero('Vampire')
            .pipe(take(1))
            .subscribe((data) => {
                if (data.error) {
                    this.error3 = true;
                    return;
                }
                this.vampire = data;
            });

        this.animesService
            .animesPorCategoriaGenero('Adventure')
            .pipe(take(1))
            .subscribe((data) => {
                if (data.error) {
                    this.error4 = true;
                    return;
                }
                this.adventure = data;
            });
    }

    genres() {
        this.animesService
            .animesPorCategoriaGenero('Mystery')
            .pipe(take(1))
            .subscribe((data) => {
                if (data.error) {
                    this.error5 = true;
                    return;
                }
                this.mistery = data;
            });

        this.animesService
            .animesPorCategoriaGenero('Supernatural')
            .pipe(take(1))
            .subscribe((data) => {
                if (data.error) {
                    this.error6 = true;
                    return;
                }
                this.supernatural = data;
            });

        this.animesService
            .animesPorCategoriaGenero('drama')
            .pipe(take(1))
            .subscribe((data) => {
                if (data.error) {
                    this.error7 = true;
                    return;
                }
                this.drama = data;
            });
    }
}
