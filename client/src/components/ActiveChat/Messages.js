import React from 'react';
import { Box } from '@material-ui/core';
import { SenderBubble, OtherUserBubble } from '.';
import moment from 'moment';

const Messages = (props) => {
  const { messages, otherUsers, userId } = props;

  const getOtherUser = (otherId) => {
    return otherUsers.find(
      (otherUser) => otherUser.id === otherId
    );
  };

  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format('h:mm');

        return message.senderId === userId ? (
          <SenderBubble key={message.id} text={message.text} time={time} attachments={message.attachments} />
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={getOtherUser(message.senderId)}
            attachments={message.attachments}
          />
        );
      })}
    </Box>
  );
};

export default Messages;