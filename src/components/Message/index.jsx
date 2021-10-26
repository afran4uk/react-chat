import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';

import './Message.scss';

export const Message = ({ avatar, user, text, date, isMe }) => (
  <div className={classNames('message', { 'message--isMe': isMe })}>
    <div className="message__avatar">
      <img src={avatar} alt={`Avatar ${user.fullName}`} />
    </div>
    <div className="message__content">
      <div className="message__bubble">
        <p className="message__text">{text}</p>
      </div>
      <span className="message__date">{formatDistanceToNow(date, { locale: ruLocale })}</span>
    </div>
  </div>
);

Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  user: PropTypes.object,
  date: PropTypes.string,
};
