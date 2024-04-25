import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Owner } from '../../models/owner.interface';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-about-us',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.css',
})
export class AboutUsComponent {
    constructor(private sharedService: SharedService) {
        this.sharedService.alertBackground('fondo-solid');
    }

    protected owners: Owner[] = [
        {
            name: 'Francisco Perez',
            role: 'Developer',
            desc: 'Fran is a detail-oriented programmer with a strong background in computer science. She is known for her analytical thinking and her ability to solve complex problems efficiently.',
            pathImage: '../../../../assets/owners/Francisco.png',
        },
        {
            name: 'Ernesto Solis',
            role: 'Developer',
            desc: 'Ernest is a creative programmer with a knack for thinking outside the box. He is passionate about finding innovative solutions to problems and enjoys experimenting with different programming techniques and methodologies.',
            pathImage: '../../../../assets/owners/Ernesto.png',
        },
        {
            name: 'Alejandro Andrade',
            role: 'Developer',
            desc: 'Ale is a disciplined programmer with a strong focus on efficiency and quality. He takes pride in writing clean, maintainable code and follows best practices to ensure that his solutions are robust and scalable.',
            pathImage: '../../../../assets/owners/Andrade.png',
        },
        {
            name: 'Meliton Rodriguez',
            role: 'Designer',
            desc: 'Meliton is a versatile graphic designer known for his ability to create visually stunning designs across various mediums. With a keen eye for detail and a passion for typography, he excels in crafting compelling brand identities and marketing materials. ',
            pathImage: '../../../../assets/owners/Meliton.png',
        },
        {
            name: 'Juan Huerta',
            role: 'Designer',
            desc: 'Juan is an analytical UX designer passionate about creating intuitive and engaging digital products. With a background in cognitive psychology and user-centered design, he specializes in understanding user needs to design interfaces that enhance the user experience.',
            pathImage: '../../../../assets/owners/Huerta.png',
        },
        {
            name: 'Alfredo Castillo',
            role: 'Designer',
            desc: 'Alfredo is a visionary product designer with a knack for creating impactful and memorable digital products. With a strong background in interaction design and a passion for emerging technology, Alfredo is constantly exploring new ways to merge design and technology to create unique user experiences.',
            pathImage: '../../../../assets/owners/Alfredo.png',
        },
    ];

    ngOnDestroy(): void {
        this.sharedService.alertBackground('fondo');
    }
}
