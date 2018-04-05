import {Component, Input} from '@angular/core';
import {ToggleService} from '../../core/toggle.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  @Input() checked: boolean;

  constructor(private toggleService: ToggleService, public router: Router) {
    this.checked = false;
  }

  public showSelected(): void {
    this.checked = !this.checked;
    this.toggleService.showSelected(this.checked);
  }
}
