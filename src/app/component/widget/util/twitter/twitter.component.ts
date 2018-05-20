import {Component, Input, OnInit, ViewChild} from '@angular/core';

declare var twttr: any;

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {

  @Input() tweetID: string;
  @ViewChild('tweet') tweetElement;

  ngOnInit() {
    twttr.widgets.createTweet(
      this.tweetID,
      this.tweetElement.nativeElement,
      {
        theme: 'default' // default | dark
      }
    );
  }
}
