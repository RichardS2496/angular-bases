import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './dbzList.component.html',
  styleUrl: './dbzList.component.css',
})
export class DbzListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  public onDeleteCharacter(id: string | undefined): void {
    if (!id) return;
    this.onDelete.emit(id);
  }
}
