import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeaturesListComponent } from "../components/features-list/features-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FeaturesListComponent, ],
})
export class AppComponent {
  title = 'subscribtion-app';
}
