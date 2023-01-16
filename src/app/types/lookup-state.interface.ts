import { LookupInterface } from "./lookup.interface";

export interface LookupStateInterface {
    isLoading: boolean;
    lookups: LookupInterface;
    error: string | null;
}
