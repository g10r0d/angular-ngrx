import { createAction, props } from "@ngrx/store";
import { LookupInterface } from "../types/lookup.interface";

export const getLookups = createAction(
    '[App-Lookup] Load lookups'
);
export const getLookupsSuccess = createAction(
    '[App-Lookup] Load lookups success',
    props<{ lookups: LookupInterface }>()
);
export const getLookupsError = createAction(
    '[App-Lookup] Load lookups error',
    props<{ error: string }>()
);
