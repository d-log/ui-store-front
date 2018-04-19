import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NgMasonryGridModule} from 'ng-masonry-grid';
import {SafePipe} from './pipe/safe.pipe';
import {ArchiveMasonryTileDefaultTileDefaultComponent} from './component/body/archive/masonry/tile/type/default-tile-default/archive-masonry-tile-default-tile-default.component';
import {ArchiveMasonryTileTextPlainDefaultComponent} from './component/body/archive/masonry/tile/type/text-plain-default/archive-masonry-tile-text-plain-default.component';
import {ArchiveMasonryTileVideoYoutubeDefaultComponent} from './component/body/archive/masonry/tile/type/video-youtube-default/archive-masonry-tile-video-youtube-default.component';
import {ArchiveMasonryTileImageDefaultComponent} from './component/body/archive/masonry/tile/type/image-default/archive-masonry-tile-image-default.component';
import {ArchiveMasonryTileComponent} from './component/body/archive/masonry/tile/archive-masonry-tile.component';
import {ArchiveMasonryComponent} from './component/body/archive/masonry/archive-masonry.component';
import {ArchiveComponent} from './component/body/archive/archive.component';
import {BodyComponent} from './component/body/body.component';
import {NavigationWidgetSettingComponent} from './component/navigation/widget/setting/navigation-widget-setting.component';
import {NavigationWidgetSearchComponent} from './component/navigation/widget/search/navigation-widget-search.component';
import {NavigationWidgetHomeComponent} from './component/navigation/widget/home/navigation-widget-home.component';
import {NavigationComponent} from './component/navigation/navigation.component';
import {LogModelService} from './service/log/log-model.service';
import {CoreHttpService} from './service/core-http-service';
import {HttpModule} from '@angular/http';
import {FooterComponent} from './component/footer/footer.component';
import {TestOneComponent} from './component/test-one/test-one.component';
import {TestTwoComponent} from './component/test-two/test-two.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavigationWidgetHomeComponent,
    NavigationWidgetSearchComponent,
    NavigationWidgetSettingComponent,
    BodyComponent,
    ArchiveComponent,
    ArchiveMasonryComponent,
    ArchiveMasonryTileComponent,
    ArchiveMasonryTileTextPlainDefaultComponent,
    ArchiveMasonryTileImageDefaultComponent,
    ArchiveMasonryTileVideoYoutubeDefaultComponent,
    ArchiveMasonryTileDefaultTileDefaultComponent,
    FooterComponent,
    SafePipe,
    TestOneComponent,
    TestTwoComponent,
  ],
  entryComponents: [
    ArchiveMasonryTileDefaultTileDefaultComponent,
    ArchiveMasonryTileImageDefaultComponent,
    ArchiveMasonryTileTextPlainDefaultComponent,
    ArchiveMasonryTileVideoYoutubeDefaultComponent,
  ],
  imports: [
    BrowserModule,
    NgMasonryGridModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    LogModelService,
    CoreHttpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
