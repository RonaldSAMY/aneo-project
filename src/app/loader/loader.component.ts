import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aneo-app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @Input() color;

  constructor() { }

  ngOnInit() {
  }

}
