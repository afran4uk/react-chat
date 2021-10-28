import React from 'react';
import { Route } from 'react-router';

import { Message } from '~/components';

export const Home = () => (
  <section className="home">
    <Message
      avatar="https://cdn-icons-png.flaticon.com/512/147/147144.png"
      text="A"
      date={new Date()}
      isReaded={true}
      attachments={[
        {
          filename: 'image.jpg',
          url: 'https://source.unsplash.com/100x100/?random1&nature,water',
        },
        {
          filename: 'image.jpg',
          url: 'https://source.unsplash.com/100x100/?random2&nature,water',
        },
        {
          filename: 'image.jpg',
          url: 'https://source.unsplash.com/100x100/?random3&nature,water',
        },
      ]}
    />

    <Message
      avatar="https://cdn-icons-png.flaticon.com/512/147/147144.png"
      text="Test stgsg"
      date={new Date()}
      isMe={true}
      isReaded={false}

    />
  </section>
);
