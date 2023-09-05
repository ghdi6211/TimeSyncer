import React from 'react';
import * as Styled from './style';

const TopTemplate: React.FC = () => {
  return (
    <Styled.CalendarContainer>
      <Styled.CalendarWrapper>
        <Styled.CalendarHeader>
          <button>{'<'}</button>
          <span>September 2023</span>
          <button>{'>'}</button>
        </Styled.CalendarHeader>
        {/* Calendar body can go here */}
      </Styled.CalendarWrapper>
    </Styled.CalendarContainer>
  );
};

export default TopTemplate;
