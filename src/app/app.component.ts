import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import sentence from '@fakerjs/sentence';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typing';
  randomText : string = sentence({words: 10});
  inputText : string = '';

  onTextChanged(text: string) {
    this.inputText = text;
  }

  getClass(randomLetter: string, inputLetter: string) {
    if (!inputLetter) {
      return 'pending'
    }

    if (randomLetter === inputLetter) {
      return 'correct'
    } else {
      return 'incorrect'
    }
  }
}
