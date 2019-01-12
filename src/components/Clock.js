import React from "react";
import bootstrap from "../bootstrap.css";
import styled from "styled-components";
import moment from "moment";
import timezone from "moment-timezone";
import { publicStyle } from "../assets/publicStyle";
class Clock extends React.Component {
  constructor() {
    super();
    var current = new Date();
    var citytime = moment.tz(current, "Australia/Sydney");
    this.state = { time: citytime };
  }

  componentDidMount() {
    this.updateTime();
  }
  componentWillUnmount() {
    clearInterval(this.timeId);
  }
  updateTime() {
    console.log(this.props.city);

    this.timeId = setInterval(() => {
      var current = new Date();
      var citytime = moment.tz(current, this.props.city_full);
      this.setState({ time: citytime });
    }, 1000);
  }

  render() {
    return (
      <ClockContainer>
        <CityContainer class="text-center align-self-center">
          {this.props.city}
        </CityContainer>

        <DateContainer class="text-center align-self-center">
          {this.state.time.format("ddd MMM D YYYY")}
        </DateContainer>

        <TimeContainer className="flex-container">
          <TimeNumContainer>{this.state.time.format("HH")}</TimeNumContainer>
          <div class="align-self-center">
            <strong>:</strong>
          </div>
          <TimeNumContainer>{this.state.time.format("mm")}</TimeNumContainer>
          <div class="align-self-center">
            <strong>:</strong>
          </div>
          <TimeNumContainer>{this.state.time.format("ss")}</TimeNumContainer>
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
