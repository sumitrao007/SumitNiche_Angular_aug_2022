import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child3Component } from './child3/child3.component';
import { ContentprojectionComponent } from './contentprojection/contentprojection.component';
import { Child4Component } from './child4/child4.component';
import { InbuildpipeComponent } from './inbuildpipe/inbuildpipe.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { SummaryPipe } from './utility/summary.pipe';
import { CourseComponent } from './course/course.component';
import { CourseService } from './utility/course.service';
import { PostComponent } from './post/post.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    Parent1Component,
    Child3Component,
    ContentprojectionComponent,
    Child4Component,
    InbuildpipeComponent,
    CustomPipeComponent,
    SummaryPipe,
    CourseComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
