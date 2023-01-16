import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from './types/app-state.interface';
import * as AppActions from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-gio1';

  constructor(
    private store: Store<AppStateInterface>
  ){}

  ngOnInit(): void {
    this.store.dispatch(AppActions.getLookups());
  }

}
