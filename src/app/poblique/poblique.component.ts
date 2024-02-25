import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ObButtonDirective, ObInputClearDirective} from '@oblique/oblique';

@Component({
	selector: 'app-poblique',
	standalone: true,
	imports: [FormsModule, ObButtonDirective, ObInputClearDirective],
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
