import React, { Component } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import { Typography, FormControl, Select, MenuItem } from '@material-ui/core';
import { EditorWrapper, HeaderContainer, EditorContainer } from '../commonStyle';

const editorOptions = {
  placeholder: 'Quill JS Editor..',
  theme: 'snow',
};

class QuillComponent extends Component {
  editor = null;

  constructor(props) {
    super(props);
    this.state = {
      writeDirection: 'ltr',
    };
  }

  componentDidMount() {
    this.instantiateEditor();
  }

  instantiateEditor() {
    const editorContainerId = document.getElementById(this.props.editorId);

    this.editor = this.createEditor(
      editorContainerId,
      editorOptions,
    );
  }

  createEditor(domElement, config) {
    return new Quill(domElement, config);
  }

  renderEditingArea = () => {
    return React.createElement('div', [this.editor]);
  };

  updateWriteDirection = (e) => {
    this.setState({ writeDirection: e.target.value })
  }
  
  render() {
    const { writeDirection } = this.state;
    return (
      <EditorWrapper>
        <HeaderContainer>
          <Typography variant="h5" color="secondary">Quill JS Editor</Typography>
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
        <EditorContainer id={this.props.editorId} style={{ direction: writeDirection }}/>
      </EditorWrapper>
    );
  }
}

export default QuillComponent;
