import React from "react";
import styled from "styled-components";
import bootstrap from "../bootstrap.css";
import ClockList from "../components/ClockList";
const cities_full = [
  "Australia/Sydney",
  "Asia/Seoul",
  "Eurpoe/London",
  "America/New_York"
];

class ClockWall extends React.Component {
  render() {
    return (
      <div>
        <ClockList citylist={cities_full} />
      </div>
    );
  }
}
export default ClockWall;
