import {Component, OnInit} from '@angular/core';
import {TimeLifeService} from '../time-life.service';

@Component({
  selector: 'app-time-life',
  templateUrl: './time-life.component.html',
  styleUrls: ['./time-life.component.scss']
})
export class TimeLifeComponent implements OnInit {
  output: string;
  constructor(private dateService: TimeLifeService) {
  }

  ngOnInit() {
  }
  onChange(value) {
    this.output = this.dateService.getDiffToNow(value);
  }
}
