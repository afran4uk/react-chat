import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';

import readedSvg from '~/assets/img/readed.svg';
import noreadedSvg from '~/assets/img/noreaded.svg';

import './Message.scss';

export const Message = ({ avatar, user, text, date, isMe, isReaded, attachments }) => (
  <div className={classNames('message', { 'message--isMe': isMe })}>
    <div className="message__content">
      {isMe && isReaded ? (
        <img className="message__icon-readed" src={readedSvg} alt="Readed icon" />
      ) : (
        <img className="message__icon-readed message__icon-readed--no" src={noreadedSvg} alt="NoReaded Icon" />
      )}
      <div className="message__avatar">
        <img src={avatar} alt={`Avatar ${user.fullName}`} />
      </div>
      <div className="message__info">
        <div className="message__bubble">
          <p className="message__text">{text}</p>
        </div>
        <div className="message__attachments">
          {attachments &&
          attachments.map((item) => (
            <div className="message__attachments-item">
              <img src={item.url} alt={item.filename} />
            </div>
          ))}
        </div>
        <span className="message__date">{formatDistanceToNow(date, { locale: ruLocale })}</span>
      </div>
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
  attachments: PropTypes.array,
};
