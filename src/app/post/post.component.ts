import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() name = ''
  @Input() status = ''
  @Input() avatar = ''
  
  // img = 'https://blogs.nvidia.com/wp-content/uploads/2023/01/creators-collab-hero-image-kv-v2-1280x720.jpg'
  removeUser() {
    this.name = '';
    this.status = '';
    this.avatar = '';
  }
}
