import { PostsStateInterface } from "../posts/types/posts-state.interface";
import { LookupStateInterface } from "./lookup-state.interface";

export interface AppStateInterface {
    lookups: LookupStateInterface;
    posts: PostsStateInterface;
}