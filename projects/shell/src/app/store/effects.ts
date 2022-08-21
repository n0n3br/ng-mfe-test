import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, switchMap, tap } from 'rxjs';
import { UserService } from '../services/userService';
import * as actions from './actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.authenticate),
      switchMap(() => this.userService.get()),
      map((user) => actions.authenticated({ user })),
      catchError(() => {
        actions.setError();
        return EMPTY;
      })
    )
  );
}
