import { IterationInterface } from './lookups/iteration.interface';
import { TierInterface } from './lookups/tier.interface';

export interface LookupInterface {
    iterations: IterationInterface[];
    tiers: TierInterface[];
}
