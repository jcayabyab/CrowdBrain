import React from "react";
import styled from "styled-components";
import dateShow from "./dateShow";

const Dates = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Detail = ({ object }) => (
  <div>
    <div>{object.description}</div>
    <hr />
    <Dates>
      <div>
        <span style={{ fontWeight: "bold" }}>Date created: </span>
        {dateShow(object.dateDue)}
      </div>
      <div>
        <span style={{ fontWeight: "bold" }}>Date due: </span>
        {dateShow(object.dateCreated)}
      </div>
    </Dates>
  </div>
);

export default Detail;
