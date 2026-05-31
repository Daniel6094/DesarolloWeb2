import {Component,signal} from '@angular/core';

@Component({
  templateUrl: './counter.html',
  styleUrls: ['./counter.css']
})
export class CounterPageComponent {
  contador = 10;
  contadorSignal = signal(5);
  increaseBy(value: number) {
    this.contador += value;
    this.contadorSignal.set(this.contadorSignal() + value);
  }
  reset() {
    this.contador = 0;
    this.contadorSignal.set(0);
  }

}
