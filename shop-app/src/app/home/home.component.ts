import { Component, OnInit, OnDestroy } from '@angular/core';
import { PortalService } from '../services/portal.service';
import { Furniture } from '../models/furniture';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  furnitures: Array<Furniture> = [];
  dataSubscriber: Subscription;
  loading: boolean;
  searchValue: any;
  unchagedList: Array<Furniture> = [];
  constructor(private portalService: PortalService) { }

  ngOnInit(): void {
    this.fetchList();
  }

  onFilterChanged(filterValue): void {
    if (filterValue) {
      const filterResult = this.unchagedList.filter(p =>
        p.price >= filterValue.min && p.price <= filterValue.max);
      this.furnitures = filterResult;
    } else {
      this.furnitures = this.unchagedList;
    }
  }

  private fetchList(): void {
    this.loading = true;
    this.dataSubscriber = this.portalService.getFurnitures().subscribe((furnitures: Array<Furniture>) => {
      this.furnitures = furnitures;
      this.unchagedList = furnitures;
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.dataSubscriber.unsubscribe();
  }

}
