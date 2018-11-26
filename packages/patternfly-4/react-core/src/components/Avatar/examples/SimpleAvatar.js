import React from 'react';
import { Avatar } from '@breakaway/react-core';
import avatarImg from './img_avatar.png';

class SimpleAvatar extends React.Component {
  render() {
    return <Avatar src={avatarImg} alt="avatar" />;
  }

}

export default SimpleAvatar;
