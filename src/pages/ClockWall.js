import React from "react";
import Clock from "../components/Clock";
import styled from "styled-components";
import bootstrap from "../bootstrap.css";
const cities = ["Sydney","Seoul","London","New York"]

class ClockWall extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="col-sm-6 col-md-6 col-lg-6 text-center align-self-center">
      
          <Container>
            <MyClock city="Sydney" city_full="Australia/Sydney" />
          </Container>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-6 text-center align-self-center">
          <Container>
            <MyClock city="Seoul" city_full="Asia/Seoul" />
    
          </Container>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-6 text-center align-self-center">
          <Container>
          
            <MyClock city="London" city_full="Eurpoe/London" />
          </Container>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-6 text-center align-self-center">
          <Container>
            <MyClock city="New York" city_full="America/New_York" />
          </Container>
        </div>
      </div>
    );
  }
}
export default ClockWall;

const Container = styled.div`
  background-color: coral;
  width: 280px;
  height: 280px;
  margin-left: 100px;
  margin-top: 100px;
`;

const MyClock = styled(Clock)`
  background-color: #fff;
`;
