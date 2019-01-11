import React from 'react';
import Clock from '../components/Clock';
import styled from 'styled-components';
import bootstrap from '../bootstrap.css';

class ClockWall extends React.Component{

    render() {
        return (
          <div>
    
          <Container> <MyClock city = "New York"></MyClock></Container>
          {/* <Container> <MyClock timezone = "seoul"></MyClock></Container>
          <Container> <MyClock timezone = "london"></MyClock></Container>
          <Container> <MyClock timezone = "newyork"></MyClock></Container> */}
          </div>
        );
      }

}
export default ClockWall;

const Container = styled.div`

  background-color:coral;
  /* background-color:rgba(232, 144, 109, 1); */
  /* background-color:rgba(234, 142, 110, 1); */
  /* background-color:dodgerblue; */
  width: 280px;
  height:280px;
  margin-left:100px;
  margin-top:100px;
  `;

const MyClock = styled(Clock)`
  background-color:#fff;
`;