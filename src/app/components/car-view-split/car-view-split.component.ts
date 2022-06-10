import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-car-view-split',
  templateUrl: './car-view-split.component.html',
  styleUrls: ['./car-view-split.component.scss']
})
export class CarViewSplitComponent implements OnInit {
  @Input() receivedUser?: { name: string } = undefined
  @Output() eventEmitter = new EventEmitter()

  constructor() {
  }

  ngOnInit(): void {
  }

  emitEvent() {
    this.eventEmitter.emit()
  }
}
