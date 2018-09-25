import React from "react";
import styled from "styled-components";

import dateShow from "./dateShow";
import Editable from "./Editable";
import EditButton from "./EditButton";

const Dates = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Body = styled.div`
  white-space: pre-wrap;
`;

const Detail = ({ object, onSubmit }) => (
  <div>
    <Editable
      object={object}
      section="description"
      inputType="textarea"
      onSubmit={values => onSubmit(values)}
      defaultTitle="Write a new description here!"
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Body>{object.description}</Body>
        <EditButton />
      </div>
    </Editable>
    <Dates>
      <div>
        <span style={{ fontWeight: "bold" }}>Date created: </span>
        {dateShow(object.dateCreated)}
      </div>
      <Editable
        object={object}
        section="dateDue"
        onSubmit={values => onSubmit(values)}
        isDate={true}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <EditButton />
          <div>
            <span style={{ fontWeight: "bold" }}>Date due: </span>
            {dateShow(object.dateDue)}
          </div>
        </div>
      </Editable>
    </Dates>
  </div>
);

export default Detail;
