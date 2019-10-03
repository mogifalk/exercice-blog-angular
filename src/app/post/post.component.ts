import {Component, Input, OnInit} from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() title;
  @Input() content;
  @Input() loveIts;
  @Input() dontLoveIts;
  @Input() createdAt;
  isLiked = false;
  isDisliked = false;
  // icons
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  constructor() { }
  ngOnInit() {
  }
  onLike() {
    if (!this.isLiked) {
      this.loveIts++;
    } else {
      this.loveIts--;
    }
    if (this.isDisliked) {
      this.isDisliked = false;
      this.dontLoveIts --;
    }
    this.isLiked = !this.isLiked;
  }
  onDislike() {
    if (!this.isDisliked) {
      this.dontLoveIts++;
    } else {
      this.dontLoveIts--;
    }
    if (this.isLiked) {
      this.isLiked = false;
      this.loveIts --;
    }
    this.isDisliked = !this.isDisliked;
  }

  selectBackgroundColor() {
    const ratio = this.loveIts - this.dontLoveIts;
    if (ratio > 0) {return 'rgba(95, 255, 65, 0.3)';
    } else if (ratio < 0) {return 'rgba(255, 60, 65, 0.3)';
    } else {
      return '';
    }
  }
}
