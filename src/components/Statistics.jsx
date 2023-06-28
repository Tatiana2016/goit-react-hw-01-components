import React from 'react';
import styled from 'styled-components';

const StyledStatistics = styled.section`
  background-color: #CEF2F0;
  padding: 2px;
`;

const Title = styled.h2`
  color: #333;
  text-align: center;
`;

const StatList = styled.ul`
  display: flex; 
  justify-content: center;
  list-style-type: none;
  padding: 2px;
  
`;

const StatItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 10px; 
  width: 250px;
  height: 100px;
  margin: 5px;
`;

const Label = styled.span`
  color: #333;
  font-weight: bold;
`;

const Percentage = styled.span`
  color: #333;
`;

const Statistics = ({ title, stats }) => {
  return (
    <StyledStatistics>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ label, percentage }, index) => (
          <StatItem
            key={`${label}-${index}`}
            backgroundColor={`rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
              Math.random() * 256
            )}, ${Math.floor(Math.random() * 256)}, 0.5)`}
          >
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StyledStatistics>
  );
};

export default Statistics;
