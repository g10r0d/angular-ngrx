import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { firstValueFrom, forkJoin, Observable, Subject } from "rxjs";
import { AppStateInterface } from "../types/app-state.interface";
import { LookupInterface } from "../types/lookup.interface";
import { IterationInterface } from "../types/lookups/iteration.interface";
import { TierInterface } from "../types/lookups/tier.interface";

@Injectable()
export class LookupService {
    
    constructor() {
    }

    loadLookups(): Promise<any> {
        return new Promise<LookupInterface>(resolve => {
            forkJoin([
                this.getIterationLookup(),
                this.getTierLookup()
            ]
            ).subscribe( result => {
                
                let lookups: LookupInterface = {
                    iterations: result[0] as IterationInterface[],
                    tiers: result[1] as TierInterface[],
                };
                resolve(lookups);
            });
        })

    }

    getIterationLookup() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let values = [
                    { id: '1', name:'Iteration 1'},
                    { id: '2', name:'Iteration 2'},
                    { id: '3', name:'Iteration 3'},
                ]
                resolve(values);
            }, 1500);
        });
    }
    getTierLookup() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let values = [
                    { id: '1', name:'Tier 1'},
                    { id: '2', name:'Tier 2'},
                    { id: '3', name:'Tier 3'},
                ]
                resolve(values);
            }, 1500);
        });
    }
}