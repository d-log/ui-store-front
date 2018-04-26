import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NgMasonryGridModule} from 'ng-masonry-grid';
import {SafePipe} from './pipe/safe.pipe';
import {LogModelService} from './service/log/log-model.service';
import {CoreHttpService} from './service/core-http-service';
import {HttpModule} from '@angular/http';
import {FooterComponent} from './component/footer/footer.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './component/header/header.component';
import {ArchiveComponent} from './component/content/archive/archive.component';
import {MasonryTileVideoYoutubeDefaultComponent} from './component/content/masonry/tile/type/video-youtube-default/masonry-tile-video-youtube-default.component';
import {MasonryTileDefaultTileDefaultComponent} from './component/content/masonry/tile/type/default-tile-default/masonry-tile-default-tile-default.component';
import {MasonryTileImageDefaultComponent} from './component/content/masonry/tile/type/image-default/masonry-tile-image-default.component';
import {MasonryTileTextPlainDefaultComponent} from './component/content/masonry/tile/type/text-plain-default/masonry-tile-text-plain-default.component';
import {MasonryTileComponent} from './component/content/masonry/tile/masonry-tile.component';
import {MasonryComponent} from './component/content/masonry/masonry.component';
import {SearchComponent} from './component/content/search/search.component';
import {PageNotFoundComponent} from './component/content/page-not-found/page-not-found.component';
import {LogPageComponent} from './component/content/log-page/log-page.component';
import {HomeComponent} from './component/content/home/home.component';
import {NavigationWidgetSettingComponent} from './component/navigation/widget/setting/navigation-widget-setting.component';
import {NavigationWidgetSearchComponent} from './component/navigation/widget/search/navigation-widget-search.component';
import {NavigationWidgetHomeComponent} from './component/navigation/widget/home/navigation-widget-home.component';
import {NavigationComponent} from './component/navigation/navigation.component';
import {LogDataVideoYoutubeDefaultComponent} from './component/content/log-page/log-data/video-youtube-default/log-data-video-youtube-default.component';
import {LogDataTextPlainDefaultComponent} from './component/content/log-page/log-data/text-plain-default/log-data-text-plain-default.component';
import {LogDataImageDefaultComponent} from './component/content/log-page/log-data/image-default/log-data-image-default.component';
import {MarkdownModule} from 'ngx-md';
import {LogDataTextMarkdownDefaultComponent} from './component/content/log-page/log-data/text-markdown-default/log-data-text-markdown-default.component';
import {LogDataDefaultDefaultComponent} from './component/content/log-page/log-data/default-default/log-data-default-default.component';
import {MasonryTileTextQuoteDefaultComponent} from './component/content/masonry/tile/type/text-quote-default/masonry-tile-text-quote-default.component';
import {LogDataTextQuoteDefaultComponent} from './component/content/log-page/log-data/text-quote-default/log-data-text-quote-default.component';
import {MasonryTileTextMarkdownDefaultComponent} from './component/content/masonry/tile/type/text-markdown-default/masonry-tile-text-markdown-default.component';
import {DisqusComponent} from './component/comment/disqus/disqus.component';
import {LogDataTextCodeDefaultComponent} from './component/content/log-page/log-data/text-code-default/log-data-text-code-default.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavigationWidgetHomeComponent,
    NavigationWidgetSearchComponent,
    NavigationWidgetSettingComponent,
    HomeComponent,
    ArchiveComponent,
    SearchComponent,
    PageNotFoundComponent,
    LogPageComponent,
    MasonryComponent,
    MasonryTileComponent,
    MasonryTileTextPlainDefaultComponent,
    MasonryTileImageDefaultComponent,
    MasonryTileVideoYoutubeDefaultComponent,
    MasonryTileDefaultTileDefaultComponent,
    MasonryTileTextQuoteDefaultComponent,
    MasonryTileTextMarkdownDefaultComponent,
    FooterComponent,
    SafePipe,
    HeaderComponent,
    LogDataDefaultDefaultComponent,
    LogDataVideoYoutubeDefaultComponent,
    LogDataTextPlainDefaultComponent,
    LogDataImageDefaultComponent,
    LogDataTextMarkdownDefaultComponent,
    LogDataTextQuoteDefaultComponent,
    LogDataTextCodeDefaultComponent,
    DisqusComponent,
  ],
  entryComponents: [
    MasonryTileDefaultTileDefaultComponent,
    MasonryTileImageDefaultComponent,
    MasonryTileTextPlainDefaultComponent,
    MasonryTileVideoYoutubeDefaultComponent,
    MasonryTileTextQuoteDefaultComponent,
    MasonryTileTextMarkdownDefaultComponent,
    LogDataDefaultDefaultComponent,
    LogDataVideoYoutubeDefaultComponent,
    LogDataTextPlainDefaultComponent,
    LogDataImageDefaultComponent,
    LogDataTextMarkdownDefaultComponent,
    LogDataTextQuoteDefaultComponent,
    LogDataTextCodeDefaultComponent,
  ],
  imports: [
    BrowserModule,
    NgMasonryGridModule,
    MarkdownModule.forRoot(),
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    LogModelService,
    CoreHttpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
