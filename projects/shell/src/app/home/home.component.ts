import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducer';
import { fromApp } from '../store/selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private appStore: Store<AppState>) {}
  loading$ = this.appStore.select(fromApp.isLoading);
  user$ = this.appStore.select(fromApp.user);

  ngOnInit(): void {}
}
