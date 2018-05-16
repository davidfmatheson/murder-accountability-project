import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BlogPostsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
