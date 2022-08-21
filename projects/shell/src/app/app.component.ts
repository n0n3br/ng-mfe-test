import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from './services/userService';
import { authenticate } from './store/actions';
import { AppState } from './store/reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private appStore: Store<AppState>,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.appStore.dispatch(authenticate());
  }
}
