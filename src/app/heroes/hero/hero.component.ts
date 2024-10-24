import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'iron man';
  public age: number = 45;

  public get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }
  changeName(): void {
    this.name = 'Richard';
  }

  changeAge() {
    this.age = 28;
  }

  resetValues(): void {
    this.name = 'iron man';
    this.age = 45;
  }
}
