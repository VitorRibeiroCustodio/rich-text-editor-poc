import React, { Component } from 'react';
import styled from "styled-components";

const EditorWrapper = styled.div`
  min-width: 700px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin-top: 3em;
`;

const EditorContainer = styled.div`
  display: flex;
  min-height: 9em;
  border-radius: 0 0 3px 3px;
  background-color: #fff;
  padding: 5px;
  font-size: 17px;
  font-weight: 300;
  box-shadow: 0px 0px 3px 1px rgba(15, 15, 15, 0.17);
`;


class QuillComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <EditorWrapper>
        <span>Quill Component</span>
      </EditorWrapper>
    );
  }
}

export default QuillComponent;
