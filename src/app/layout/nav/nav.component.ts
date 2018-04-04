import {Component, Input, OnInit} from '@angular/core';
import {HttpService} from '../../core/http.service';
import {ToggleService} from '../../core/toggle.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input()
  checked: boolean;

  constructor(private http: HttpService, private toggleService: ToggleService) {
    this.checked = false;
  }

  showSelected() {
    this.checked = !this.checked;
    this.toggleService.showSelected(this.checked);
  }

  ngOnInit() {

  }

}
