import React, { Component } from 'react';
import styled from "styled-components";

const EditorWrapper = styled.div`
  min-width: 700px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin-top: 3em;
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
