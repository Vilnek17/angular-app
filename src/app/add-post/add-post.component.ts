import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {
  @Output() onPost = new EventEmitter();

  titleInputValue = '';
  textInputValue = '';
  avatarInputValue='';

  onName(event: any){
    this.titleInputValue = event.target.value;
  }

  onStatus(event: any){
    const value = event.target.value;
    const slicedValue = value.length >= 50 ? value.slice(0, 50) : value;
    this.textInputValue = slicedValue;
    const textInputValue = slicedValue;
  }

  onAvatar(event: any){
    this.avatarInputValue = event.target.value;
  }
  addNewPost(titleValue: string,textInputValue:string , avatarInputValue:string ) {
    const value = {
      name: titleValue,
      status:  textInputValue,
      avatar:avatarInputValue,}
    this.onPost.emit(value)
    this.titleInputValue = '';
    this.textInputValue = '';
    this.avatarInputValue = '';
    }
}
