import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  post = {
    name: '',
    status:'',
    avatar:'',
  }
  

  addPost(newPost: any){
    this.post.name = newPost.name
    this.post.status = newPost.status
    this.post.avatar = newPost.avatar
  }

}
