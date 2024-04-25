import { Component, ElementRef, HostListener, Input, Renderer2, ViewChild } from '@angular/core';
import { Data } from '../../models/anime.interface';
import { AnimeCardComponent } from '../anime-card/anime-card.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-carrousel',
    standalone: true,
    imports: [CommonModule, AnimeCardComponent],
    templateUrl: './carrousel.component.html',
    styleUrl: './carrousel.component.css',
})
export class CarrouselComponent {
    @Input('animes') public animes: Data[] | any = [];
    @Input('title') public title: string = '';
    @Input('error') error: boolean = false;

    public sliderHeight: string = '250px';
    public cardWidth: string = '200px';

    @ViewChild('slider', { static: false }) slider!: ElementRef;
    @ViewChild('slide_inner', { static: false }) slide_inner!: ElementRef;

    @HostListener('window:click', ['$event']) onHover(event: MouseEvent) {
        const { className } = event.target as Element;
        if (className.toLowerCase() === 'slider') return;
    }

    constructor(private render2: Renderer2) {}

    public get outer(): DOMRect {
        return this.slider.nativeElement.getBoundingClientRect();
    }

    public get inner(): DOMRect {
        return this.slide_inner.nativeElement.getBoundingClientRect();
    }

    checkBoundary() {
        const slide_inner = this.slide_inner.nativeElement;

        const { left } = slide_inner.style;

        if (parseInt(left) > 0) {
            this.render2.setStyle(slide_inner, 'left', '0px');
        } else if (this.outer.right > this.inner.right) {
            this.render2.setStyle(slide_inner, 'left', `-${this.inner.width - this.outer.width}px`);
        }
    }

    moveBtn(value: string) {
        const slide_inner = this.slide_inner.nativeElement;

        let resultado = this.inner.right - 200;

        if (value === 'right') {
            if (this.outer.right > resultado) {
                this.render2.setStyle(slide_inner, 'left', `-${this.inner.width - this.outer.width}px`);
            } else {
                this.render2.setStyle(slide_inner, 'left', `${slide_inner.offsetLeft - 200}px`);
            }
        }
        if (value === 'left') {
            this.render2.setStyle(slide_inner, 'left', `${slide_inner.offsetLeft + 200}px`);
        }
        this.checkBoundary();
    }
}
