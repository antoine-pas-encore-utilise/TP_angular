import { Component } from '@angular/core';
import { servivePosts } from './servivePosts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: any[];

  constructor(private postSer: servivePosts){
    this.posts = this.postSer.posts;
    console.log(this.posts);
  }

  ngOnInit(){
  }

}
