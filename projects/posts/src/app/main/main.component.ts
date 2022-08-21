import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'projects/shell/src/app/store/reducer';
import { fromApp } from 'projects/shell/src/app/store/selectors';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private appStore: Store<AppState>) {}

  user$ = this.appStore.select(fromApp.user);

  ngOnInit(): void {}
}
