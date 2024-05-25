import React from 'react';
import TaskList from './TaskList';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #e0e0e0;
  min-height: 100vh;
`;

const App = () => {
  return (
    <AppContainer>
      <TaskList />
    </AppContainer>
  );
};
 

export default App;
