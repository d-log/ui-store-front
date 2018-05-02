import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SafePipe} from './pipe/safe.pipe';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {LogPageComponent} from './component/content/log-page/log-page.component';
import {HomeComponent} from './component/content/home/home.component';
import {LogDataVideoYoutubeDefaultComponent} from './component/content/log-page/log-data/video-youtube-default/log-data-video-youtube-default.component';
import {LogDataTextPlainDefaultComponent} from './component/content/log-page/log-data/text-plain-default/log-data-text-plain-default.component';
import {LogDataImageDefaultComponent} from './component/content/log-page/log-data/image-default/log-data-image-default.component';
import {LogDataTextMarkdownDefaultComponent} from './component/content/log-page/log-data/text-markdown-default/log-data-text-markdown-default.component';
import {LogDataDefaultDefaultComponent} from './component/content/log-page/log-data/default-default/log-data-default-default.component';
import {LogDataTextQuoteDefaultComponent} from './component/content/log-page/log-data/text-quote-default/log-data-text-quote-default.component';
import {LogDataTextCodeDefaultComponent} from './component/content/log-page/log-data/text-code-default/log-data-text-code-default.component';
import {MarkdownService} from './service/markdown/markdown.service';
import {MasonryTileDefaultTileDefaultComponent} from './component/content/log-tile/masonry/tile/type/log/default-tile-default/masonry-tile-default-tile-default.component';
import {MasonryTileTextPlainDefaultComponent} from './component/content/log-tile/masonry/tile/type/log/text-plain-default/masonry-tile-text-plain-default.component';
import {MasonryTileImageDefaultComponent} from './component/content/log-tile/masonry/tile/type/log/image-default/masonry-tile-image-default.component';
import {MasonryTileVideoYoutubeDefaultComponent} from './component/content/log-tile/masonry/tile/type/log/video-youtube-default/masonry-tile-video-youtube-default.component';
import {MasonryTileComponent} from './component/content/log-tile/masonry/tile/masonry-tile.component';
import {MasonryComponent} from './component/content/log-tile/masonry/masonry.component';
import {MasonryTileTextMarkdownDefaultComponent} from './component/content/log-tile/masonry/tile/type/log/text-markdown-default/masonry-tile-text-markdown-default.component';
import {MasonryTileTextQuoteDefaultComponent} from './component/content/log-tile/masonry/tile/type/log/text-quote-default/masonry-tile-text-quote-default.component';
import {ArchiveComponent} from './component/content/log-tile/archive/archive.component';
import {NavigationSideLeftComponent} from './component/navigation-side-left/navigation-side-left.component';
import {SideNavigationColumnComponent} from './component/navigation-side-left/column/side-navigation-column.component';
import {DirectoryModelService} from './service/core/file/type/directory/directory-model.service';
import {NavigationTopComponent} from './component/navigation-top/navigation-top.component';
import {NavigationSideLeftToolbarComponent} from './component/navigation-side-left/toolbar/navigation-side-left-toolbar.component';
import {SideNavigationTopSearchComponent} from './component/navigation-top/navigation-top-search/side-navigation-top-search.component';
import {DisqusModule} from 'ngx-disqus';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EventBrokerService} from './service/event-broker-shared-service/event-broker-service';
import {NavigationSideLeftColumnToolbarComponent} from './component/navigation-side-left/column/toolbar/navigation-side-left-column-toolbar.component';
import {PageNotFoundComponent} from './component/content/page-not-found/page-not-found.component';
import {FileModelService} from './service/core/file/file-model.service';
import {LogModelService} from './service/core/file/type/log/log-model.service';
import {MasonryTileDirectoryDefaultTileDefaultComponent} from './component/content/log-tile/masonry/tile/type/directory/default-tile-default/masonry-tile-directory-default-tile-default.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationTopComponent,
    SideNavigationTopSearchComponent,
    NavigationSideLeftComponent,
    NavigationSideLeftToolbarComponent,
    SideNavigationColumnComponent,
    NavigationSideLeftColumnToolbarComponent,
    HomeComponent,
    PageNotFoundComponent,
    LogPageComponent,
    ArchiveComponent,
    MasonryComponent,
    MasonryTileComponent,
    MasonryTileTextPlainDefaultComponent,
    MasonryTileImageDefaultComponent,
    MasonryTileVideoYoutubeDefaultComponent,
    MasonryTileDefaultTileDefaultComponent,
    MasonryTileTextQuoteDefaultComponent,
    MasonryTileTextMarkdownDefaultComponent,
    MasonryTileDirectoryDefaultTileDefaultComponent,
    SafePipe,
    LogDataDefaultDefaultComponent,
    LogDataVideoYoutubeDefaultComponent,
    LogDataTextPlainDefaultComponent,
    LogDataImageDefaultComponent,
    LogDataTextMarkdownDefaultComponent,
    LogDataTextQuoteDefaultComponent,
    LogDataTextCodeDefaultComponent,
  ],
  entryComponents: [
    MasonryTileDefaultTileDefaultComponent,
    MasonryTileImageDefaultComponent,
    MasonryTileTextPlainDefaultComponent,
    MasonryTileVideoYoutubeDefaultComponent,
    MasonryTileTextQuoteDefaultComponent,
    MasonryTileTextMarkdownDefaultComponent,
    MasonryTileDirectoryDefaultTileDefaultComponent,
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
    BrowserAnimationsModule,
    DisqusModule.forRoot('marcuschiu'),
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    FileModelService,
    LogModelService,
    DirectoryModelService,
    MarkdownService,
    EventBrokerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
