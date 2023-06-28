import React from 'react';
import styled from 'styled-components';

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  margin: 20px 40px;
  border: 2px solid darkgreen;
  border-radius: 5px;
  width: 320px;
  height: 500px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 15px;
`;

const Avatar = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background-color: olive;
`;

const Name = styled.p`
  margin: 4px 0;
  text-align: center;
  font-weight: bold;
`;

const Tag = styled.p`
  margin: 4px 0;
  text-align: center;
  font-size: 32px;
`;

const Location = styled.p`
  margin: 4px 0;
  text-align: center;
  font-size: 32px;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: olive;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  font-size: 25px;
`;

const Label = styled.span`
  margin-top: 4px;
  text-align: center;
  font-size: 25px;
`;

const Quantity = styled.span`
  margin-top: 4px;
  text-align: center;
`;

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileWrapper>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatItem>
        <StatItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatItem>
        <StatItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatItem>
      </Stats>
    </ProfileWrapper>
  );
};

export default Profile;
