import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {ObButtonDirective, ObMasterLayoutModule} from '@oblique/oblique';
import {PobliqueComponent} from '../poblique/poblique.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [RouterOutlet, MatButton, ObButtonDirective, PobliqueComponent, ObMasterLayoutModule],
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
