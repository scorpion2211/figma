import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'madison';
  steps = [
    { label: 'Cart Review', icon: 'greenCheck.svg', bold: false },
    { label: 'Checkout', icon: 'greenCheck.svg', bold: false },
    { label: 'Special Offer', icon: 'step3.svg', bold: true },
    { label: 'Confirmation', icon: 'step4.svg', bold: false },
  ];
}
