import React from 'react';
import { Route } from 'react-router';

import { Message } from '~/components';

export const Home = () => (
  <section className="home">
    <Message
      avatar="https://cdn-icons-png.flaticon.com/512/147/147144.png"
      text="A"
      date={new Date()}
    />

    <Message
      avatar="https://cdn-icons-png.flaticon.com/512/147/147144.png"
      text="Test stgsg"
      date={new Date()}
      isMe={true}
    />
  </section>
);
