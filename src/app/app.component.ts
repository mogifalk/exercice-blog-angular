import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  lorem = 'Lorem ipsum dolor sit amet consectetur adipiscing elit, dictumst ornare volutpat dapibus felis aliquam,' +
    ' quis interdum tempus leo est feugiat. Dapibus a per class massa magnis eros ullamcorper non eget sodales euismod, s' +
    'ed sapien sociosqu dui eu morbi tellus consequat arcu suspendisse, vestibulum nulla auctor mollis lobortis viverra ' +
    'parturient torquent ultrices dictum. ';
  post1 = {
      title: 'Young people are happy !',
      content: this.lorem,
      loveIts: 0,
      dontLoveIts: 0,
      created_at: new Date()
    };
    post2 = {
      title: 'Know what ? Old ones too !',
      content: this.lorem,
      loveIts: 0,
      dontLoveIts: 0,
      created_at: new Date()
    };
    post3 = {
      title: 'Cats turns everybody happy',
      content: this.lorem,
      loveIts: 0,
      dontLoveIts: 0,
      created_at: new Date()
    };
  posts = [this.post1, this.post2, this.post3];
}
