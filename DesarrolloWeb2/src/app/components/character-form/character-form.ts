import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-character-form',
  imports: [],
  templateUrl: './character-form.html',
})
export class CharacterFormComponent {
  name = signal('');
  poder = signal(0);

  addCharacter() {
    console.log(this.name(), this.poder());
  }
}
