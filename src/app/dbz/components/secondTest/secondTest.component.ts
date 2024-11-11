import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-second-test',
  templateUrl: './secondTest.component.html',
  styleUrl: './secondTest.component.css',
})
export class SecondTestComponent {
  @Output() messageEvent = new EventEmitter<string>();
  public messageSent: boolean = false;

  public sendMessage() {
    this.messageEvent.emit('This message has been sent from child component');
    this.messageSent = true;
  }
}
