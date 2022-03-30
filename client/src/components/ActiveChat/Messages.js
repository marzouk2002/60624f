import React, { useMemo } from 'react';
import { Box } from '@material-ui/core';
import { SenderBubble, OtherUserBubble } from '.';
import moment from 'moment';

const Messages = (props) => {
  const { otherUser, userId, messages } = props;

  const sortedMessages =   useMemo(() => {
    return messages.sort((msgA, msgB) => {
      return  new Date(msgA.createdAt).getTime() - new Date(msgB.createdAt).getTime()
    })
  }, [ messages ])

  return (
    <Box>
      {sortedMessages.map((message) => {
        const time = moment(message.createdAt).format('h:mm');

        return message.senderId === userId ? (
          <SenderBubble key={message.id} text={message.text} time={time} />
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
          />
        );
      })}
    </Box>
  );
};

export default Messages;
