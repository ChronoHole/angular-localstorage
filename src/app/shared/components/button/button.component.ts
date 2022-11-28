import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() label: string;
  @Output() onClick = new EventEmitter<any>();

  ngOnInit() {}

  onClickButton(event: Event) {
    this.onClick.emit(event);
  }
}
