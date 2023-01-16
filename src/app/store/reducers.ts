import { createReducer, on } from "@ngrx/store";
import { LookupStateInterface } from "../types/lookup-state.interface";
import * as AppActions from './actions';


export const appInitialState: LookupStateInterface = {
    error: '',
    isLoading: false,
    lookups: {
        iterations: [],
        tiers: []
    }
}

export const lookupReducer = createReducer(
    appInitialState,
    on(
        AppActions.getLookups,
        (state, action) => ({
            ...state,
            isLoading: true
        })
    ),
    on(
        AppActions.getLookupsSuccess,
        (state, action) => ({
            ...state,
            isLoading: false,
            lookups: action.lookups
        })
    ),
    on(
        AppActions.getLookupsError,
        (state, action) => ({
            ...state,
            isLoading: false,
            error: action.error
        })
    )
);