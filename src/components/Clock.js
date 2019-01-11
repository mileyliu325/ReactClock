import React from "react";
import bootstrap from "../bootstrap.css";
import styled from "styled-components";
import { publicStyle } from "../assets/publicStyle";

class Clock extends React.Component {
  constructor() {
    super();
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.updateTime();
  }
  componentWillUnmount() {
    clearInterval(this.timeId);
  }
  updateTime() {
    this.timeId = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  render() {
    return (
      <ClockContainer>
        <CityContainer class="text-center align-self-center">
          {this.props.city}
        </CityContainer>
        <DateContainer class="text-center align-self-center">
          {this.state.time.toDateString()}
        </DateContainer>
        <TimeContainer className="flex-container">
          <TimeNumContainer>{this.state.time.getHours()}</TimeNumContainer>
          <div class="align-self-center"><strong>:</strong></div>
          <TimeNumContainer>{this.state.time.getMinutes()}</TimeNumContainer>
          <div class="align-self-center"><strong>:</strong></div>
          <TimeNumContainer>{this.state.time.getSeconds()}</TimeNumContainer>
        </TimeContainer>
      </ClockContainer>
    );
  }
}

export default Clock;


const ClockContainer = styled.div`
  background-color: rgba(232, 144, 109, 0.5);
  width: 280px;
  height: 280px;
`;

const CityContainer = styled.div`
  width: 100%;
  height: 18%;
  color: #000;
  font-size: 24px;
  background-color: white;
  text-align: center;
`;

const DateContainer = styled.div`
  width: 280px;
  height: 18%;
  ${publicStyle};
`;

const TimeContainer = styled.div`
  width: 90%;
  height: 20%;
  margin-top: 20%;
  margin-left: 5%;
  color: white;
  background-color: transparent;
  display: flex;
  flex-wrap: nowrap;
  text-align: center;
  
`;

const TimeNumContainer = styled.div`
  height: 100%;
  width: 23%;
  background-color: rgba(215, 132, 102, 1);
  color: #ffffff;
  font-size: 30px;
  margin-right: 5%;
  margin-left: 5%;
  text-align: center;
`;
