import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataSharingService } from '../service/data-sharing.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent implements OnInit, OnDestroy {
  private data = '';
  private currentMessageToken: Subscription;

  constructor(private dataService: DataSharingService) { }

  ngOnInit() {
    this.currentMessageToken = this.dataService.currentMessage.subscribe(newdata => {
      this.data = newdata;
    });
  }

  ngOnDestroy(): void {
    this. currentMessageToken.unsubscribe();
  }
}
