import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnimesService } from '../../services/animes.service';
import { debounceTime } from 'rxjs';
import { Data } from '../../models/anime.interface';
import { AnimeCardComponent } from '../../components/anime-card/anime-card.component';

@Component({
    selector: 'app-search',
    standalone: true,
    imports: [CommonModule, AnimeCardComponent, ReactiveFormsModule],
    templateUrl: './search.component.html',
    styleUrl: './search.component.css',
})
export class SearchComponent {
    public animes: Data[] | any = [];
    public mostrar: boolean = false;
    public focus: boolean = false;
    public termino: string = '';

    searchForm: FormGroup = this.fb.group({
        text: ['', [Validators.required]],
    });

    @ViewChild('input') input!: ElementRef<HTMLInputElement>;

    constructor(private fb: FormBuilder, private animesService: AnimesService) {}
    ngOnInit(): void {
        this.focus = true;

        this.searchForm
            .get('text')
            ?.valueChanges.pipe(debounceTime(300))
            .subscribe((value) => {
                this.termino = value;
                this.buscar();
            });
    }

    buscar() {
        const { text } = this.searchForm.value;

        if (text.length == 0) {
            this.animes = [];
            this.mostrar = false;
            return;
        }

        this.animesService.searchAnime(text).subscribe((value) => {
            if (value.length == 0) {
                this.mostrar = true;
                return;
            }
            this.animes = value;
            this.mostrar = false;
        });
    }

    ngAfterViewInit(): void {
        this.input.nativeElement.focus();
    }
}
