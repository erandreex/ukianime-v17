import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'split',
    standalone: true,
})
export class SplitPipe implements PipeTransform {
    transform(value: string): string {
        const valor = value.split('_')[1];
        return valor[0].toUpperCase();
    }
}
