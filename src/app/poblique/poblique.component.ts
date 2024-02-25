import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ObButtonDirective, ObInputClearDirective} from '@oblique/oblique';
import {NgIf} from '@angular/common';

@Component({
	selector: 'app-poblique',
	standalone: true,
	imports: [FormsModule, ObButtonDirective, ObInputClearDirective, NgIf],
	templateUrl: './poblique.component.html',
	styleUrl: './poblique.component.scss'
})
export class PobliqueComponent {
	inputString: string = '';
	reversedString: string = '';

	reverseString(): void {
		this.reversedString = this.inputString.split('').reverse().join('');
	}
}
