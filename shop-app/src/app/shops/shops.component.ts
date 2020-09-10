import { Component, OnInit, OnDestroy } from '@angular/core';
import { Shop } from '../models/shop';
import { Subscription } from 'rxjs';
import { PortalService } from '../services/portal.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit, OnDestroy {
  shops: Array<Shop> = [];
  dataSubscriber: Subscription;
  loading: boolean;
  constructor(private portalService: PortalService) { }

  ngOnInit(): void {
    this.fetchList();
  }

  private fetchList(): void {
    this.loading = true;
    this.dataSubscriber = this.portalService.getShops().subscribe((shops: Array<Shop>) => {
      this.shops = shops;
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.dataSubscriber.unsubscribe();
  }

}
