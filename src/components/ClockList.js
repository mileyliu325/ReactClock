import React from "react";
import Clock from "./Clock";
import styled from "styled-components";
import bootstrap from "../bootstrap.css";

class ClockList extends React.Component {
  render() {
    const clocklist = this.props.citylist.map(city_name => (
      <Container>
        {
          <MyClock
            city={city_name.split("/")[1].replace("_", " ")}
            city_full={city_name}
          />
        }
      </Container>
    ));
    return <div>{clocklist}</div>;
  }
}

export default ClockList;

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
