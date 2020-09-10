import { Component, OnInit, OnDestroy } from '@angular/core';
import { PortalService } from '../services/portal.service';
import { Subscription } from 'rxjs';
import { Magazine } from '../models/magazine';

@Component({
  selector: 'app-magazines',
  templateUrl: './magazines.component.html',
  styleUrls: ['./magazines.component.css']
})
export class MagazinesComponent implements OnInit, OnDestroy {
  magazines: Array<Magazine> = [];
  dataSubscriber: Subscription;
  loading: boolean;

  constructor(private portalService: PortalService) { }

  ngOnInit(): void {
    this.fetchList();
  }

  private fetchList(): void {
    this.loading = true;
    this.dataSubscriber = this.portalService.getMagazines().subscribe((magazines: Array<Magazine>) => {
      this.magazines = magazines;
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.dataSubscriber.unsubscribe();
  }

}
