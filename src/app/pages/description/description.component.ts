import { Component } from '@angular/core';
import { forkJoin, switchMap } from 'rxjs';
import { SingleAimeServices } from '../../services/singleAnime.service';
import { Categoria } from '../../models/categorias.interface';
import { Data } from '../../models/anime.interface';
import { Generos } from '../../models/generos.interface';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-description',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './description.component.html',
    styleUrl: './description.component.css',
})
export class DescriptionComponent {
    public anime!: Data;
    public categorias!: Categoria[];
    public generos!: Generos[];
    public viewImage: boolean = false;
    public averageRating: number = 0;

    constructor(private singleAimeServices: SingleAimeServices, private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.activatedRoute.params
            .pipe(
                switchMap(({ id }) =>
                    forkJoin([
                        this.singleAimeServices.animesPorId(id),
                        this.singleAimeServices.categoriasAnime(id),
                        this.singleAimeServices.generosAnime(id),
                    ])
                )
            )
            .subscribe((value) => {
                this.anime = value[0];
                this.averageRating = value[0].attributes.averageRating || 0;
                this.categorias = value[1];
                this.generos = value[2];
            });
    }

    load() {
        setTimeout(() => {
            this.viewImage = true;
        }, 500);
    }
}
