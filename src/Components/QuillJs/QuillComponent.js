import React, { Component } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import { Typography } from '@material-ui/core';
import { EditorWrapper, HeaderContainer, EditorContainer } from '../commonStyle';

const editorOptions = {
  placeholder: 'Quill JS Editor..',
  theme: 'snow',
};

class QuillComponent extends Component {
  editor = null;

  constructor(props) {
    super(props);
    this.state = {}
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
  
  render() {
    return (
      <EditorWrapper>
        <HeaderContainer>
          <Typography variant="h5" color="secondary">Quill JS Editor</Typography>
        </HeaderContainer>
        <EditorContainer id={this.props.editorId} />
      </EditorWrapper>
    );
  }
}

export default QuillComponent;
