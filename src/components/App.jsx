import React from 'react';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
import transactions from '../data/transactions.json';
import friends from '../data/friends.json';
import data from '../data/data.json';
import user from '../data/user';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        fontSize: 30,
        color: '#003E52',
        backgroundColor: '#CEF2F0',
      }}
    >
      <div style={{ flex: '0 0 auto' }}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <FriendList friends={friends} />
      </div>
      <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Statistics title="Upload stats" stats={data} />          
          <TransactionHistory items={transactions} />
        </div>
      </div>
    </div>
  );
};
