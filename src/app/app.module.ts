import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {SortablejsModule} from 'angular-sortablejs';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {DisqusModule} from 'ngx-disqus';

import {AppComponent} from './app.component';

import {NavigationTopComponent} from './component/navigation-top/navigation-top.component';

import {NavigationSideLeftComponent} from './component/navigation-side-left/navigation-side-left.component';
import {NavigationSideLeftToolbarComponent} from './component/navigation-side-left/toolbar/navigation-side-left-toolbar.component';
import {DirectorySelectorColumnToolbarComponent} from './component/widget/core/directory/selector/column/toolbar/directory-selector-column-toolbar.component';
import {DirectorySelectorColumnComponent} from './component/widget/core/directory/selector/column/directory-selector-column.component';
import {SideNavigationTopSearchComponent} from './component/navigation-top/navigation-top-search/side-navigation-top-search.component';
import {DirectorySelectorComponent} from './component/widget/core/directory/selector/directory-selector.component';

import {PageNotFoundComponent} from './component/content/page-not-found/page-not-found.component';

import {HomeComponent} from './component/content/home/home.component';
import {HomeTopComponent} from './component/content/home/home-top/home-top.component';

import {ArchiveComponent} from './component/content/log-tile/archive/archive.component';
import {MasonryComponent} from './component/content/log-tile/masonry/masonry.component';
import {MasonryTileComponent} from './component/content/log-tile/masonry/tile/masonry-tile.component';
import {MasonryTileDefaultComponent} from './component/content/log-tile/masonry/tile/type/default/masonry-tile-default.component';
import {MasonryTileDirectoryComponent} from './component/content/log-tile/masonry/tile/type/directory/masonry-tile-directory.component';
import {MasonryTileDirectoryDefaultTileDefaultComponent} from './component/content/log-tile/masonry/tile/type/directory/default-tile-default/masonry-tile-directory-default-tile-default.component';
import {MasonryTileLogComponent} from './component/content/log-tile/masonry/tile/type/log/masonry-tile-log.component';
import {MasonryTileLogBottomComponent} from './component/content/log-tile/masonry/tile/type/log/masonry-tile-log-bottom.component';
import {MasonryTileDefaultTileDefaultComponent} from './component/content/log-tile/masonry/tile/type/log/default-tile-default/masonry-tile-default-tile-default.component';
import {MasonryTileTextPlainDefaultComponent} from './component/content/log-tile/masonry/tile/type/log/text-plain-default/masonry-tile-text-plain-default.component';
import {MasonryTileImageDefaultComponent} from './component/content/log-tile/masonry/tile/type/log/image-default/masonry-tile-image-default.component';
import {MasonryTileVideoYoutubeDefaultComponent} from './component/content/log-tile/masonry/tile/type/log/video-youtube-default/masonry-tile-video-youtube-default.component';
import {MasonryTileTextMarkdownDefaultComponent} from './component/content/log-tile/masonry/tile/type/log/text-markdown-default/masonry-tile-text-markdown-default.component';
import {MasonryTileTextQuoteDefaultComponent} from './component/content/log-tile/masonry/tile/type/log/text-quote-default/masonry-tile-text-quote-default.component';

import {FilePageIdComponent} from './component/content/file-page/file-page-id/file-page-id.component';
import {FilePageComponent} from './component/content/file-page/page/file-page.component';
import {FilePageContentHeaderComponent} from './component/content/file-page/page/file-page-content-header/file-page-content-header.component';
import {LogDataDefaultDefaultComponent} from './component/content/file-page/page/file-data/default-default/log-data-default-default.component';
import {LogDataVideoYoutubeDefaultComponent} from './component/content/file-page/page/file-data/video-youtube-default/log-data-video-youtube-default.component';
import {LogDataTextPlainDefaultComponent} from './component/content/file-page/page/file-data/text-plain-default/log-data-text-plain-default.component';
import {LogDataImageDefaultComponent} from './component/content/file-page/page/file-data/image-default/log-data-image-default.component';
import {LogDataTextMarkdownDefaultComponent} from './component/content/file-page/page/file-data/text-markdown-default/log-data-text-markdown-default.component';
import {LogDataTextQuoteDefaultComponent} from './component/content/file-page/page/file-data/text-quote-default/log-data-text-quote-default.component';
import {LogDataTextCodeDefaultComponent} from './component/content/file-page/page/file-data/text-code-default/log-data-text-code-default.component';
import {LogDataTypeComponent} from './component/content/file-page/page/file-data/log-data-type.component';

import {SafePipe} from './pipe/safe.pipe';
import {MarkdownPipe} from './pipe/markdown/markdown.pipe';
import {CodePipe} from './pipe/code/code.pipe';
import {DatePipe} from './pipe/date/date.pipe';

import {TwitterService} from './service/twitter/twitter.service';
import {TagModelService} from './service/core/file/type/tag/tag-model.service';
import {ImageModelService} from './service/core/file/type/image/image-model.service';
import {FileModelService} from './service/core/file/file-model.service';
import {LogModelService} from './service/core/file/type/log/log-model.service';
import {DirectoryModelService} from './service/core/file/type/directory/directory-model.service';
import {MarkdownService} from './service/markdown/markdown.service';
import {EventBrokerService} from './service/event-broker-shared-service/event-broker-service';

import {ScriptHackComponent} from './component/widget/util/script-hack/script-hack.component';
import {TwitterComponent} from './component/widget/util/twitter/twitter.component';

import {TagSelectorToolbarComponent} from './component/widget/core/tag/selector/toolbar/tag-selector-toolbar.component';
import {TagSelectorComponent} from './component/widget/core/tag/selector/tag-selector.component';
import {TagSelectorContentComponent} from './component/widget/core/tag/selector/content/tag-selector-content.component';
import {TagCreatorComponent} from './component/widget/core/tag/create/tag-creator.component';
import {TagUpdatorComponent} from './component/widget/core/tag/update/tag-updator.component';
import {TagWidgetComponent} from './component/widget/core/tag/tag-widget.component';

import {FileCreateComponent} from './component/content/file-editor/file-create.component';
import {FileUpdateComponent} from './component/content/file-editor/file-update.component';
import {FileEditorComponent} from './component/content/file-editor/editor/file-editor.component';
import {FileEditorDataComponent} from './component/content/file-editor/editor/data/file-editor-data.component';
import {FileEditorOrganizationDirectoryComponent} from './component/content/file-editor/editor/data/organization/directory/file-editor-organization-directory.component';
import {FileEditorLogDataHelperImageComponent} from './component/content/file-editor/editor/data/log-data/helper/image/file-editor-log-data-helper-image.component';
import {FileEditorLogDataHelperImageUploadComponent} from './component/content/file-editor/editor/data/log-data/helper/image/upload/file-editor-log-data-helper-image-upload.component';
import {FileEditorLogDataImageQuoteComponent} from './component/content/file-editor/editor/data/log-data/type/impl/image-quote/file-editor-log-data-image-quote.component';
import {FileEditorLogDataTextQuoteComponent} from './component/content/file-editor/editor/data/log-data/type/impl/text-quote/file-editor-log-data-text-quote.component';
import {FileEditorOrganizationTagComponent} from './component/content/file-editor/editor/data/organization/tag/file-editor-organization-tag.component';
import {FileEditorLogDataHelperTextComponent} from './component/content/file-editor/editor/data/log-data/helper/text/file-editor-log-data-helper-text.component';
import {FileEditorLogDataHelperImageExistingComponent} from './component/content/file-editor/editor/data/log-data/helper/image/existing/file-editor-log-data-helper-image-existing.component';
import {FileEditorLogDataTextPlainComponent} from './component/content/file-editor/editor/data/log-data/type/impl/text-plain/file-editor-log-data-text-plain.component';
import {FileEditorLogDataTextMarkdownComponent} from './component/content/file-editor/editor/data/log-data/type/impl/text-markdown/file-editor-log-data-text-markdown.component';
import {FileEditorLogDataImageInternalComponent} from './component/content/file-editor/editor/data/log-data/type/impl/image-internal/file-editor-log-data-image-internal.component';
import {FileEditorLogDataTextCodeComponent} from './component/content/file-editor/editor/data/log-data/type/impl/text-code/file-editor-log-data-text-code.component';
import {FileEditorLogDataContainerComponent} from './component/content/file-editor/editor/data/log-data/type/file-editor-log-data-container.component';
import {FileEditorLogDataCssComponent} from './component/content/file-editor/editor/data/log-data/type/css/file-editor-log-data-css.component';
import {FileEditorLogDataHelperImageLinkComponent} from './component/content/file-editor/editor/data/log-data/helper/image/link/file-editor-log-data-helper-image-link.component';
import {FileEditorOrganizationComponent} from './component/content/file-editor/editor/data/organization/file-editor-organization.component';
import {FileEditorLogDataComponent} from './component/content/file-editor/editor/data/log-data/file-editor-log-data.component';
import {FileEditorLogDataHelperLinkComponent} from './component/content/file-editor/editor/data/log-data/helper/link/file-editor-log-data-helper-link.component';
import {FileEditorMetadataComponent} from './component/content/file-editor/editor/metadata/file-editor-metadata.component';
import {FileEditorLogDataTwitterTweetComponent} from './component/content/file-editor/editor/data/log-data/type/impl/twitter-tweet/file-editor-log-data-twitter-tweet.component';
import {FileEditorLogDataVideoYoutubeComponent} from './component/content/file-editor/editor/data/log-data/type/impl/video-youtube/file-editor-log-data-video-youtube.component';
import {FilePageCommentSectionComponent} from './component/content/file-page/page/file-page-comment-section/file-page-comment-section.component';

@NgModule({
  declarations: [
    AppComponent,
    TagWidgetComponent,
    TagSelectorComponent,
    TagSelectorContentComponent,
    TagCreatorComponent,
    TagUpdatorComponent,
    TagSelectorToolbarComponent,
    TwitterComponent,
    ScriptHackComponent,
    NavigationTopComponent,
    SideNavigationTopSearchComponent,
    NavigationSideLeftComponent,
    NavigationSideLeftToolbarComponent,
    DirectorySelectorColumnComponent,
    DirectorySelectorComponent,
    DirectorySelectorColumnToolbarComponent,
    HomeComponent,
    HomeTopComponent,
    PageNotFoundComponent,
    FileCreateComponent,
    FileUpdateComponent,
    FileEditorComponent,
    FileEditorDataComponent,
    FileEditorOrganizationComponent,
    FileEditorOrganizationTagComponent,
    FileEditorOrganizationDirectoryComponent,
    FileEditorMetadataComponent,
    FileEditorLogDataComponent,
    FileEditorLogDataHelperTextComponent,
    FileEditorLogDataHelperLinkComponent,
    FileEditorLogDataHelperImageComponent,
    FileEditorLogDataHelperImageLinkComponent,
    FileEditorLogDataHelperImageExistingComponent,
    FileEditorLogDataHelperImageUploadComponent,
    FileEditorLogDataCssComponent,
    FileEditorLogDataContainerComponent,
    FileEditorLogDataTextPlainComponent,
    FileEditorLogDataTextCodeComponent,
    FileEditorLogDataImageQuoteComponent,
    FileEditorLogDataImageInternalComponent,
    FileEditorLogDataTextMarkdownComponent,
    FileEditorLogDataTextQuoteComponent,
    FileEditorLogDataTwitterTweetComponent,
    FileEditorLogDataVideoYoutubeComponent,
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
    TwitterService,
    FileModelService,
    LogModelService,
    TagModelService,
    ImageModelService,
    DirectoryModelService,
    MarkdownService,
    EventBrokerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
