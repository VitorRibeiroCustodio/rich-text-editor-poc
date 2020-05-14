import React, { Component } from 'react';
import { Editor, EditorState, convertToRaw } from 'draft-js';
import Toolbar from "./Toolbar/index";
import { customStyleFn, customStyleMap } from "./Toolbar/customStyles";
import { Button, Typography } from '@material-ui/core';
import { EditorWrapper, HeaderContainer, EditorContainer } from '../commonStyle';

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
        <HeaderContainer>
          <Typography variant="h5" color="primary">Draft JS Editor</Typography>
        </HeaderContainer>
        <Toolbar
            editorState={editorState}
            updateEditorState={this.updateEditorState}
          />
        <EditorContainer>
          <Editor
            placeholder="Draft JS Editor..."
            editorState={editorState} 
            onChange={this.updateEditorState}
            customStyleFn={customStyleFn}
            customStyleMap={customStyleMap}
            spellCheck={true}
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
