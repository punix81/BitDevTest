import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {ObButtonDirective, ObMasterLayoutModule} from '@oblique/oblique';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, MatButton, ObButtonDirective, ObMasterLayoutModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
	title = 'BitDevTest';
}
