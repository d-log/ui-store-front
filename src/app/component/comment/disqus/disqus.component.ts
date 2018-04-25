import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-disqus',
  templateUrl: './disqus.component.html',
  styleUrls: ['./disqus.component.css']
})
export class DisqusComponent implements OnInit {

  /**
   * TODO pass as inputs
   *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
   *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
   **/
  disqus_config = function () {
    this.page.url = 'http://ui.marcuschiu.com:4200/';  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = 'uniq'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  };

  constructor() {
  }

  ngOnInit() {
    const d = document;
    const s = d.createElement('script');
    s.src = 'https://marcuschiu.disqus.com/embed.js';
    const ts = +new Date();
    s.setAttribute('data-timestamp', String(ts));
    (d.head || d.body).appendChild(s);
  }

}
