import React, { Component } from 'react';
import { Editor, EditorState, convertToRaw } from 'draft-js';
import styled from "styled-components";
import Toolbar from "./Toolbar/index";
import { customStyleFn, customStyleMap } from "./Toolbar/customStyles";
import { Button } from '@material-ui/core';

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

class DraftComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      rawJson: null,
    }
  }

  updateEditorState = (editorState) => {
    this.setState({editorState});
  }
  
  exportData = () => {
    const { editorState } = this.state;
    this.setState({
      rawJson: convertToRaw(editorState.getCurrentContent()),
    });
  }

  render() {
    const { editorState } = this.state;
    return (
      <EditorWrapper>
        <Toolbar
            editorState={editorState}
            updateEditorState={this.updateEditorState}
          />
        <EditorContainer>
          <Editor
            placeholder="Draf JS Editor..."
            editorState={editorState} 
            onChange={this.updateEditorState}
            textDirection="RTL"
            textAlignment="right"
            customStyleFn={customStyleFn}
            customStyleMap={customStyleMap}
            spellCheck={true}
            textDirectionality='LTR'
          />
        </EditorContainer>
        <Button variant="contained" color="primary" onClick={this.exportData}>
          Export Data
        </Button>
      </EditorWrapper>
    );
  }
}

export default DraftComponent;
