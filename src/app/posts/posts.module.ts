import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { StoreModule } from '@ngrx/store';
import { PostsService } from './services/posts.service';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './store/effects';
import { LookupService } from '../services/lookup-service';



@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('posts', reducers),
    EffectsModule.forFeature([PostsEffects])
  ],
  providers: [PostsService, LookupService],
  exports: [
    PostsComponent
  ]
})
export class PostsModule { }
