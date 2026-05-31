import { Component } from '@angular/core';

@Component({
    selector: 'app-hero-page',
    templateUrl: './hero-page.component.html',
    styleUrls: ['./hero-page.component.css']
})
export class HeroPageComponent {

    public names: string[] = ['Ironman', 'Spiderman', 'Thor'];
    public ages: number[] = [25, 30, 1500];
    public descritions: string[] = ['Ironman es el hombre de acero', 'Spiderman fue picado por una araña', 'Thor es el Dios de Trueno'];

    public name: string = 'Ironman';
    public age: number = 25;
    public descrition: string = 'Ironman es el hombre de acero';

    private indexName = 0;
    private indexAge = 0;
    private indexDescription = 0;

    getHeroDescription(): string {
        return `${this.descritions[this.indexDescription]}`;
    }

    changeHero() {
        this.indexName = (this.indexName + 1) % this.names.length;
        this.name = this.names[this.indexName];
        this.indexDescription = (this.indexDescription + 1) % this.descritions.length;
        this.descrition = this.descritions[this.indexDescription];
    }

    changeAge() {
        this.indexAge = (this.indexAge + 1) % this.ages.length;
        this.age = this.ages[this.indexAge];
    }

    reset() {
        this.indexName = 0;
        this.indexAge = 0;
        this.name = this.names[0];
        this.age = this.ages[0];
    }
}