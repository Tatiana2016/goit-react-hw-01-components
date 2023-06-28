import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Table = styled.table`  
  width: 1400px;
`;

const TableHeader = styled.th`
  background-color: #003E52;
  color: #FFF;
  border: 1px solid #003E52;
  padding: 8px;
  text-align: center;  
`;

const TableCell = styled.td`
  border: 1px solid #003E52;
  padding: 8px;
  text-align: center;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #CEF2F0;
  }

  &:hover {
    background-color: #B8E6E0;
  }
`;

const TransactionHistory = ({ items }) => {
  return (
    <TableWrapper>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Type</TableHeader>
            <TableHeader>Amount</TableHeader>
            <TableHeader>Currency</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <TableRow key={id}>
              <TableCell>{type}</TableCell>
              <TableCell>{amount}</TableCell>
              <TableCell>{currency}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default TransactionHistory;
