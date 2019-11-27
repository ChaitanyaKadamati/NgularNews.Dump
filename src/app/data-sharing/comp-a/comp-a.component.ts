import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../service/data-sharing.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {
  private data = '';

  constructor(private dataShare: DataSharingService) { }

  ngOnInit() { }

  emit() {
    this.dataShare.changeMessage(this.data);
  }
}
