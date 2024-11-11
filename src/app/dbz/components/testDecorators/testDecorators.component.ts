import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test-decorators',
  templateUrl: './testDecorators.component.html',
  styleUrl: './testDecorators.component.css',
})
export class TestDecoratorsComponent {
  @Input() message!: string;
}
