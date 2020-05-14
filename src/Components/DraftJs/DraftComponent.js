import React, { Component } from 'react';
import { Editor, EditorState, convertToRaw } from 'draft-js';
import Toolbar from "./Toolbar/index";
import { customStyleFn, customStyleMap } from "./Toolbar/customStyles";
import { Button, Typography, Select, MenuItem, FormControl } from '@material-ui/core';
import { EditorWrapper, HeaderContainer, EditorContainer } from '../commonStyle';

class DraftComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      rawJson: null,
      writeDirection: 'ltr',
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

  updateWriteDirection = (e) => {
    this.setState({ writeDirection: e.target.value })
  }

  render() {
    const { editorState, writeDirection } = this.state;
    return (
      <EditorWrapper>
        <HeaderContainer>
          <Typography variant="h5" color="primary">Draft JS Editor</Typography>
          <FormControl variant="outlined">
            <Select
              value={writeDirection}
              onChange={this.updateWriteDirection}
            >
              <MenuItem value={'ltr'}>Left To Right</MenuItem>
              <MenuItem value={'rtl'}>Right To Left</MenuItem>
            </Select>
          </FormControl>
        </HeaderContainer>
        <Toolbar
            editorState={editorState}
            updateEditorState={this.updateEditorState}
          />
        <EditorContainer style={{ direction: writeDirection }}>
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
