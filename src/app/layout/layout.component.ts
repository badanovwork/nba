import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ToggleService} from '../core/toggle.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {

  checked: boolean;
  subscription: Subscription;

  constructor(private toggleService: ToggleService) {
    this.subscription = toggleService.checked$.subscribe(
      checked => {
        this.checked = checked;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {

  }
}
