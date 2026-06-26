import { Component,signal } from '@angular/core';
interface Character {
  id: number;
  name: string;
  poder: number;
}

@Component({
  selector: 'app-anime-page',
  templateUrl: './anime-page.html',
})
export class AnimePageComponent {
   name= signal('');
   poder= signal(0);
   character= signal<Character[]>([
   {id:1,name:'Goku',poder:10000},
   {id:2,name:'Vegeta',poder:8000},
   {id:3,name:'Piccolo',poder:7000},
   {id:4,name:'Yamcha',poder:5000}]);
   
  addCharacter(){
   console.log(this.name(),this.poder());
   if(!this.name() || !this.poder() || this.poder() <= 0){
    return;
   }
   const newCharacter: Character = {
    id: this.character().length + 1,
    name: this.name(),
    poder: this.poder()
   }
    this.character().push(newCharacter);
    this.resetFields();

  }

  resetFields(){
    this.name.set('');
    this.poder.set(0);
  }
}