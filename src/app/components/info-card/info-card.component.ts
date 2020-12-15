import { Component, Input, OnInit } from '@angular/core';
import { Info } from '../info.model';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent implements OnInit {
  @Input() info: Info;
  readMore = false;

  constructor() {}

  ngOnInit(): void {}
}
