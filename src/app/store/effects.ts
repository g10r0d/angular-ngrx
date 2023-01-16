import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LookupService } from "../services/lookup-service";
import * as AppActions from "./actions";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class AppEffects {
    constructor(
        private actions$: Actions,
        private lookupService: LookupService
    ){}

    loadLookups$ = createEffect(() =>this.actions$
        .pipe(
            ofType(AppActions.getLookups),
            mergeMap(() => {
                return this.lookupService.loadLookups()
                    .then((lookups) => {
                        console.log('Gio2: ', lookups);
                        return AppActions.getLookupsSuccess({lookups});
                    })
                    .catch((error) => AppActions.getLookupsError({error}))
            })
        )
    );
}