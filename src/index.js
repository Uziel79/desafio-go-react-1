import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Header from './components/Header';
import Post from './components/Post';

import './styles/style.scss';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        userData: {
          imageUser:
            'https://addons.cdn.mozilla.net/user-media/userpics/0/0/45.png?modified=1490992702',
          nameUser: 'Diego Schell',
          hourPost: 'Há 5 min',
        },
        postText:
          'Tenetur fugit sed ex delectus tempore sunt. Provident animi molestiae beatae reiciendis est quis quo corrupti. Voluptatibus necessitatibus eveniet ut quo quidem non id impedit illum. Eum enim quibusdam aut sed. A porro veniam quidem. Magni unde et enim cum quia et eius. Expedita eum nam illum voluptatem ipsum corrupti et qui. Quibusdam aut vero esse ut porro exercitationem similique placeat. Eaque id voluptas modi quasi magnam et. Iusto eaque iure aperiam eligendi adipisci rem aliquid dolorum in. Voluptas pariatur perferendis neque dolor hic tempora cupiditate similique quibusdam.',
      },
      {
        id: 2,
        userData: {
          imageUser: 'https://developers.google.com/web/images/contributors/philipwalton.jpg',
          nameUser: 'Thiago Vieira',
          hourPost: 'Há 8 min',
        },
        postText:
          'Tenetur fugit sed ex delectus tempore sunt. Provident animi molestiae beatae reiciendis est quis quo corrupti. Voluptatibus necessitatibus eveniet ut quo quidem non id impedit illum. Eum enim quibusdam aut sed. A porro veniam quidem. Magni unde et enim cum quia et eius.',
      },
      {
        id: 3,
        userData: {
          imageUser:
            'https://meta-s3-cdn.freetls.fastly.net/original/3X/d/b/dbc27e828527ea14c204ded84fdb9144d9cd02d8.jpg',
          nameUser: 'Robson',
          hourPost: 'Há 10 min',
        },
        postText:
          'Tenetur fugit sed ex delectus tempore sunt. Provident animi molestiae beatae reiciendis est quis quo corrupti. Voluptatibus necessitatibus eveniet ut quo quidem non id impedit illum. Eum enim quibusdam aut sed. A porro veniam quidem. Magni unde et enim cum quia et eius. Est quia sint veritatis autem distinctio aut vero. Eveniet vero nisi impedit rem voluptatibus. Maiores animi incidunt non eligendi quis nisi consequuntur.',
      },
    ],
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          {this.state.posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
