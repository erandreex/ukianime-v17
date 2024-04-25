import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { StylesService, styles, stylesAllowedOptions } from '../../services/styles.service';
import { SplitPipe } from '../../shared/split.pipe';

@Component({
    selector: 'app-modal-customizes',
    standalone: true,
    imports: [CommonModule, SplitPipe],
    templateUrl: './modal-customizes.component.html',
    styleUrl: './modal-customizes.component.css',
})
export class ModalCustomizesComponent {
    public estado: boolean = false;
    public subscription!: Subscription;

    public optionsSelected: styles = {
        theme: '',
        image: '',
        color: '',
        size: '',
    };

    public allStyles: stylesAllowedOptions | null = null;

    constructor(private stylesService: StylesService) {
        this.allStyles = this.stylesService.allowedStyles;
        this.optionsSelected = this.stylesService.styleLogic;
    }

    modal(value: string) {
        value === 'abrir' ? (this.estado = true) : (this.estado = false);
    }

    selectStyle(style: string, option: string) {
        this.optionsSelected = this.stylesService.active(style, option);

        return;
    }
}
