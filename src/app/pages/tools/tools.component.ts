import { Component } from '@angular/core';
import { Tool } from '../../models/tool.interface';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../services/shared.service';

@Component({
    selector: 'app-tools',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './tools.component.html',
    styleUrl: './tools.component.css',
})
export class ToolsComponent {
    constructor(private sharedService: SharedService) {
        this.sharedService.alertBackground('fondo-solid');
    }
    public tools: Tool[] = [
        {
            name: 'Angular',
            version: 'v17.3.0',
            desc: 'Angular is a popular open-source framework for building web applications, offering a structured approach to development and powerful features for creating dynamic single-page applications.',
            pathImage: '../../../../assets/tools/angular.png',
        },
        {
            name: 'Font-Awesome',
            version: 'icons',
            desc: 'Font Awesome is a widely-used icon set and toolkit, providing scalable vector icons that can be easily customized and styled using CSS, enhancing the visual appeal and user experience of web projects.',
            pathImage: '../../../../assets/tools/fontawesome.png',
        },
        {
            name: 'TypeScript',
            version: 'v5.4.2',
            desc: 'TypeScript is a superset of JavaScript that adds optional static typing and other features, enhancing the development experience by catching errors at compile-time and providing better tooling support.',
            pathImage: '../../../../assets/tools/typescript.png',
        },
        {
            name: 'RxJS',
            version: 'v7.8.0',
            desc: 'RxJS is a reactive programming library for JavaScript, enabling developers to work with asynchronous data streams and handle complex asynchronous workflows using a powerful set of operators for composing and manipulating data streams.',
            pathImage: '../../../../assets/tools/rxjs.png',
        },
    ];
}
