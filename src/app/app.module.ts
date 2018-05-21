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
import {LogSelectorColumnToolbarComponent} from './component/widget/core/log/selector/column/toolbar/log-selector-column-toolbar.component';
import {LogSelectorColumnComponent} from './component/widget/core/log/selector/column/log-selector-column.component';
import {LogSelectorComponent} from './component/widget/core/log/selector/log-selector.component';

import {PageNotFoundComponent} from './component/content/page-not-found/page-not-found.component';

import {HomeComponent} from './component/content/home/home.component';
import {HomeTopComponent} from './component/content/home/home-top/home-top.component';

import {ArchiveComponent} from './component/content/log-tile/archive/archive.component';
import {MasonryComponent} from './component/content/log-tile/masonry/masonry.component';
import {TileLogComponent} from './component/content/log-tile/masonry/tile/type/log/tile-log.component';
import {TileLogDefaultComponent} from './component/content/log-tile/masonry/tile/type/log/tile-log-default/tile-log-default.component';
import {TileLogExtraComponent} from './component/content/log-tile/masonry/tile/type/log/tile-log-extra/tile-log-extra.component';

import {LogPageIdComponent} from './component/content/log-page/page-id/log-page-id.component';
import {LogPageComponent} from './component/content/log-page/page/log-page.component';
import {LogContentHeaderSectionComponent} from './component/content/log-page/page/log-content/section/log-content-header-section/log-content-header-section.component';
import {LogContentCommentSectionComponent} from './component/content/log-page/page/log-content/section/log-content-comment-section/log-content-comment-section.component';
import {LogContentVideoYoutubeDefaultComponent} from './component/widget/core/log/log-content/video-youtube-default/log-content-video-youtube-default.component';
import {LogContentTextPlainDefaultComponent} from './component/widget/core/log/log-content/text-plain-default/log-content-text-plain-default.component';
import {LogContentImageDefaultComponent} from './component/widget/core/log/log-content/image-default/log-content-image-default.component';
import {LogContentTextMarkdownDefaultComponent} from './component/widget/core/log/log-content/text-markdown-default/log-content-text-markdown-default.component';
import {LogContentTextQuoteDefaultComponent} from './component/widget/core/log/log-content/text-quote-default/log-content-text-quote-default.component';
import {LogContentTextCodeDefaultComponent} from './component/widget/core/log/log-content/text-code-default/log-content-text-code-default.component';
import {LogContentTypeComponent} from './component/content/log-page/page/log-content/log-content-type.component';

import {SafePipe} from './pipe/safe.pipe';
import {MarkdownPipe} from './pipe/markdown/markdown.pipe';
import {CodePipe} from './pipe/code/code.pipe';
import {DatePipe} from './pipe/date/date.pipe';

import {TwitterService} from './service/twitter/twitter.service';
import {TagModelService} from './service/core/endpoint/tag/tag-model.service';
import {ImageModelService} from './service/core/endpoint/image/image-model.service';
import {ImageUploadService} from './service/core/endpoint/image/image-upload.service';
import {LogModelService} from './service/core/endpoint/log/log-model.service';
import {EventBrokerService} from './service/event-broker-shared-service/event-broker-service';

import {ScriptHackComponent} from './component/widget/util/script-hack/script-hack.component';
import {TwitterComponent} from './component/widget/util/twitter/twitter.component';

import {TagSelectorToolbarComponent} from './component/widget/core/tag/selector/toolbar/tag-selector-toolbar.component';
import {TagSelectorComponent} from './component/widget/core/tag/selector/tag-selector.component';
import {TagSelectorContentComponent} from './component/widget/core/tag/selector/content/tag-selector-content.component';
import {TagCreatorComponent} from './component/widget/core/tag/create/tag-creator.component';
import {TagUpdatorComponent} from './component/widget/core/tag/update/tag-updator.component';
import {TagWidgetComponent} from './component/widget/core/tag/tag-widget.component';

import {LogCreateComponent} from './component/content/log-editor/log-create.component';
import {LogUpdateComponent} from './component/content/log-editor/log-update.component';
import {LogEditorComponent} from './component/content/log-editor/editor/log-editor.component';
import {LogEditorMetadataComponent} from './component/content/log-editor/editor/metadata/log-editor-metadata.component';
import {LogEditorOrganizationComponent} from './component/content/log-editor/editor/organization/log-editor-organization.component';
import {LogEditorOrganizationTagComponent} from './component/content/log-editor/editor/organization/tag/log-editor-organization-tag.component';
import {LogEditorOrganizationDirectoryComponent} from './component/content/log-editor/editor/organization/directory/log-editor-organization-directory.component';
import {LogEditorContentsComponent} from './component/content/log-editor/editor/content/log-editor-contents.component';
import {LogEditorContentHelperTextComponent} from './component/content/log-editor/editor/content/helper/text/log-editor-content-helper-text.component';
import {LogEditorContentHelperLinkComponent} from './component/content/log-editor/editor/content/helper/link/log-editor-content-helper-link.component';
import {LogEditorContentHelperImageComponent} from './component/content/log-editor/editor/content/helper/image/log-editor-content-helper-image.component';
import {LogEditorContentHelperImageLinkComponent} from './component/content/log-editor/editor/content/helper/image/link/log-editor-content-helper-image-link.component';
import {LogEditorContentHelperImageExistingComponent} from './component/content/log-editor/editor/content/helper/image/existing/log-editor-content-helper-image-existing.component';
import {LogEditorContentTextCodeComponent} from './component/content/log-editor/editor/content/type/impl/text-code/log-editor-content-text-code.component';
import {LogEditorContentTextQuoteComponent} from './component/content/log-editor/editor/content/type/impl/text-quote/log-editor-content-text-quote.component';
import {LogEditorContentVideoYoutubeComponent} from './component/content/log-editor/editor/content/type/impl/video-youtube/log-editor-content-video-youtube.component';
import {LogEditorContentTwitterTweetComponent} from './component/content/log-editor/editor/content/type/impl/twitter-tweet/log-editor-content-twitter-tweet.component';
import {LogEditorContentHelperImageUploadComponent} from './component/content/log-editor/editor/content/helper/image/upload/log-editor-content-helper-image-upload.component';
import {LogEditorContentCssComponent} from './component/content/log-editor/editor/content/type/css/log-editor-content-css.component';
import {LogEditorContentContainerComponent} from './component/content/log-editor/editor/content/type/log-editor-content-container.component';
import {LogEditorContentTextPlainComponent} from './component/content/log-editor/editor/content/type/impl/text-plain/log-editor-content-text-plain.component';
import {LogEditorContentTextMarkdownComponent} from './component/content/log-editor/editor/content/type/impl/text-markdown/log-editor-content-text-markdown.component';
import {LogEditorContentImageInternalComponent} from './component/content/log-editor/editor/content/type/impl/image-internal/log-editor-content-image-internal.component';
import {LogEditorContentImageQuoteComponent} from './component/content/log-editor/editor/content/type/impl/image-quote/log-editor-content-image-quote.component';
import {LogContentChildLogsSectionComponent} from './component/content/log-page/page/log-content/section/log-content-child-logs-section/log-content-child-logs-section.component';

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
    NavigationSideLeftComponent,
    NavigationSideLeftToolbarComponent,
    LogSelectorColumnComponent,
    LogSelectorComponent,
    LogSelectorColumnToolbarComponent,
    HomeComponent,
    HomeTopComponent,
    PageNotFoundComponent,
    LogCreateComponent,
    LogUpdateComponent,
    LogEditorComponent,
    LogEditorOrganizationComponent,
    LogEditorOrganizationTagComponent,
    LogEditorOrganizationDirectoryComponent,
    LogEditorMetadataComponent,
    LogEditorContentsComponent,
    LogEditorContentHelperTextComponent,
    LogEditorContentHelperLinkComponent,
    LogEditorContentHelperImageComponent,
    LogEditorContentHelperImageLinkComponent,
    LogEditorContentHelperImageExistingComponent,
    LogEditorContentHelperImageUploadComponent,
    LogEditorContentCssComponent,
    LogEditorContentContainerComponent,
    LogEditorContentTextPlainComponent,
    LogEditorContentTextCodeComponent,
    LogEditorContentImageQuoteComponent,
    LogEditorContentImageInternalComponent,
    LogEditorContentTextMarkdownComponent,
    LogEditorContentTextQuoteComponent,
    LogEditorContentTwitterTweetComponent,
    LogEditorContentVideoYoutubeComponent,
    LogPageIdComponent,
    LogPageComponent,
    LogContentHeaderSectionComponent,
    LogContentCommentSectionComponent,
    LogContentChildLogsSectionComponent,
    LogContentTypeComponent,
    LogContentVideoYoutubeDefaultComponent,
    LogContentTextPlainDefaultComponent,
    LogContentImageDefaultComponent,
    LogContentTextMarkdownDefaultComponent,
    LogContentTextQuoteDefaultComponent,
    LogContentTextCodeDefaultComponent,
    ArchiveComponent,
    MasonryComponent,
    TileLogComponent,
    TileLogExtraComponent,
    TileLogDefaultComponent,
    SafePipe,
    MarkdownPipe,
    CodePipe,
    DatePipe,
  ],
  entryComponents: [
    TileLogComponent,
    TileLogDefaultComponent,
    LogContentVideoYoutubeDefaultComponent,
    LogContentTextPlainDefaultComponent,
    LogContentImageDefaultComponent,
    LogContentTextMarkdownDefaultComponent,
    LogContentTextQuoteDefaultComponent,
    LogContentTextCodeDefaultComponent,
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
    LogModelService,
    TagModelService,
    ImageModelService,
    ImageUploadService,
    EventBrokerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
