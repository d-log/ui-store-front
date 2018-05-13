import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SafePipe} from './pipe/safe.pipe';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
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
import {SideNavigationColumnComponent} from './component/navigation-side-left/column-container/column/side-navigation-column.component';
import {DirectoryModelService} from './service/core/file/type/directory/directory-model.service';
import {NavigationTopComponent} from './component/navigation-top/navigation-top.component';
import {NavigationSideLeftToolbarComponent} from './component/navigation-side-left/toolbar/navigation-side-left-toolbar.component';
import {SideNavigationTopSearchComponent} from './component/navigation-top/navigation-top-search/side-navigation-top-search.component';
import {DisqusModule} from 'ngx-disqus';
import {EventBrokerService} from './service/event-broker-shared-service/event-broker-service';
import {NavigationSideLeftColumnToolbarComponent} from './component/navigation-side-left/column-container/column/toolbar/navigation-side-left-column-toolbar.component';
import {PageNotFoundComponent} from './component/content/page-not-found/page-not-found.component';
import {FileModelService} from './service/core/file/file-model.service';
import {LogModelService} from './service/core/file/type/log/log-model.service';
import {MasonryTileDirectoryDefaultTileDefaultComponent} from './component/content/log-tile/masonry/tile/type/directory/default-tile-default/masonry-tile-directory-default-tile-default.component';
import {MasonryTileDefaultComponent} from './component/content/log-tile/masonry/tile/type/default/masonry-tile-default.component';
import {MasonryTileDirectoryComponent} from './component/content/log-tile/masonry/tile/type/directory/masonry-tile-directory.component';
import {MasonryTileLogComponent} from './component/content/log-tile/masonry/tile/type/log/masonry-tile-log.component';
import {HomeTopComponent} from './component/content/home/home-top/home-top.component';
import {MasonryTileLogBottomComponent} from './component/content/log-tile/masonry/tile/type/log/masonry-tile-log-bottom.component';
import {FileCreateComponent} from './component/content/create-file/file-create.component';
import {HomeComponent} from './component/content/home/home.component';
import {FilePageComponent} from './component/content/file-page/page/file-page.component';
import {FilePageContentHeaderComponent} from './component/content/file-page/page/file-page-content-header/file-page-content-header.component';
import {LogDataDefaultDefaultComponent} from './component/content/file-page/page/file-data/default-default/log-data-default-default.component';
import {LogDataVideoYoutubeDefaultComponent} from './component/content/file-page/page/file-data/video-youtube-default/log-data-video-youtube-default.component';
import {LogDataTextPlainDefaultComponent} from './component/content/file-page/page/file-data/text-plain-default/log-data-text-plain-default.component';
import {LogDataImageDefaultComponent} from './component/content/file-page/page/file-data/image-default/log-data-image-default.component';
import {LogDataTextMarkdownDefaultComponent} from './component/content/file-page/page/file-data/text-markdown-default/log-data-text-markdown-default.component';
import {LogDataTextQuoteDefaultComponent} from './component/content/file-page/page/file-data/text-quote-default/log-data-text-quote-default.component';
import {LogDataTextCodeDefaultComponent} from './component/content/file-page/page/file-data/text-code-default/log-data-text-code-default.component';
import {FilePageIdComponent} from './component/content/file-page/file-page-id/file-page-id.component';
import {FileCreateOrganizationComponent} from './component/content/create-file/data/organization/file-create-organization.component';
import {FileCreateMetadataComponent} from './component/content/create-file/metadata/file-create-metadata.component';
import {FileCreateLogDataComponent} from './component/content/create-file/data/log-data/file-create-log-data.component';
import {FileCreateOrganizationTagComponent} from './component/content/create-file/data/organization/tag/file-create-organization-tag.component';
import {FileCreateOrganizationDirectoryComponent} from './component/content/create-file/data/organization/directory/file-create-organization-directory.component';
import {TagModelService} from './service/core/file/type/tag/tag-model.service';
import {FileCreateDataComponent} from './component/content/create-file/data/file-create-data.component';
import {SideNavigationColumnContainerComponent} from './component/navigation-side-left/column-container/side-navigation-column-container.component';
import {FileCreateLogDataContainerComponent} from './component/content/create-file/data/log-data/type/file-create-log-data-container.component';
import {FileCreateLogDataTextPlainComponent} from './component/content/create-file/data/log-data/type/impl/text-plain/file-create-log-data-text-plain.component';
import {FileCreateLogDataTextCodeComponent} from './component/content/create-file/data/log-data/type/impl/text-code/file-create-log-data-text-code.component';
import {FileCreateLogDataImageQuoteComponent} from './component/content/create-file/data/log-data/type/impl/image-quote/file-create-log-data-image-quote.component';
import {FileCreateLogDataImageInternalComponent} from './component/content/create-file/data/log-data/type/impl/image-internal/file-create-log-data-image-internal.component';
import {FileCreateLogDataTextMarkdownComponent} from './component/content/create-file/data/log-data/type/impl/text-markdown/file-create-log-data-text-markdown.component';
import {FileCreateLogDataTextQuoteComponent} from './component/content/create-file/data/log-data/type/impl/text-quote/file-create-log-data-text-quote.component';
import {FileCreateLogDataVideoYoutubeComponent} from './component/content/create-file/data/log-data/type/impl/video-youtube/file-create-log-data-video-youtube.component';
import {LogDataTypeComponent} from './component/content/file-page/page/file-data/log-data-type.component';
import {MarkdownPipe} from './pipe/markdown/markdown.pipe';
import {CodePipe} from './pipe/code/code.pipe';
import {SortablejsModule} from 'angular-sortablejs';
import {FormsModule} from '@angular/forms';
import {DatePipe} from './pipe/date/date.pipe';
import {FilePageCommentSectionComponent} from './component/content/file-page/page/file-page-comment-section/file-page-comment-section.component';
import {FileCreateLogDataCssComponent} from './component/content/create-file/data/log-data/type/css/file-create-log-data-css.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationTopComponent,
    SideNavigationTopSearchComponent,
    NavigationSideLeftComponent,
    NavigationSideLeftToolbarComponent,
    SideNavigationColumnComponent,
    SideNavigationColumnContainerComponent,
    NavigationSideLeftColumnToolbarComponent,
    HomeComponent,
    HomeTopComponent,
    PageNotFoundComponent,
    FileCreateComponent,
    FileCreateDataComponent,
    FileCreateOrganizationComponent,
    FileCreateOrganizationTagComponent,
    FileCreateOrganizationDirectoryComponent,
    FileCreateMetadataComponent,
    FileCreateLogDataComponent,
    FileCreateLogDataCssComponent,
    FileCreateLogDataContainerComponent,
    FileCreateLogDataTextPlainComponent,
    FileCreateLogDataTextCodeComponent,
    FileCreateLogDataImageQuoteComponent,
    FileCreateLogDataImageInternalComponent,
    FileCreateLogDataTextMarkdownComponent,
    FileCreateLogDataTextQuoteComponent,
    FileCreateLogDataVideoYoutubeComponent,
    FilePageIdComponent,
    FilePageComponent,
    FilePageContentHeaderComponent,
    FilePageCommentSectionComponent,
    ArchiveComponent,
    MasonryComponent,
    MasonryTileComponent,
    MasonryTileDefaultComponent,
    MasonryTileDirectoryComponent,
    MasonryTileLogComponent,
    MasonryTileLogBottomComponent,
    MasonryTileTextPlainDefaultComponent,
    MasonryTileImageDefaultComponent,
    MasonryTileVideoYoutubeDefaultComponent,
    MasonryTileDefaultTileDefaultComponent,
    MasonryTileTextQuoteDefaultComponent,
    MasonryTileTextMarkdownDefaultComponent,
    MasonryTileDirectoryDefaultTileDefaultComponent,
    SafePipe,
    MarkdownPipe,
    CodePipe,
    DatePipe,
    LogDataTypeComponent,
    LogDataDefaultDefaultComponent,
    LogDataVideoYoutubeDefaultComponent,
    LogDataTextPlainDefaultComponent,
    LogDataImageDefaultComponent,
    LogDataTextMarkdownDefaultComponent,
    LogDataTextQuoteDefaultComponent,
    LogDataTextCodeDefaultComponent,
  ],
  entryComponents: [
    MasonryTileDefaultComponent,
    MasonryTileDirectoryComponent,
    MasonryTileLogComponent,
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
    FormsModule,
    BrowserModule,
    SortablejsModule.forRoot({animation: 150}), // https://github.com/SortableJS/angular-sortablejs
    DisqusModule.forRoot('marcuschiu'),
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    FileModelService,
    LogModelService,
    TagModelService,
    DirectoryModelService,
    MarkdownService,
    EventBrokerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
