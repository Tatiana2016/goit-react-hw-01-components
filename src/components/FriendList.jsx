import React from 'react';
import styled from 'styled-components';

const FriendListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: 40px;
`;

const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  flex-direction: row; 
`;

const Status = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.$isOnline ? 'green' : 'red')};
`;

const Avatar = styled.img`
  margin-right: 10px;
`;

const Name = styled.p`
  font-size: 16px;
`;

const FriendList = ({ friends }) => {
  return (
    <FriendListWrapper>
      {friends.map((friend) => (
        <FriendListItem key={friend.id}>
          <Status $isOnline={friend.isOnline} />
          <Avatar src={friend.avatar} alt="User avatar" width="60" />
          <Name>{friend.name}</Name>
        </FriendListItem>
      ))}
    </FriendListWrapper>
  );
};

export default FriendList;
