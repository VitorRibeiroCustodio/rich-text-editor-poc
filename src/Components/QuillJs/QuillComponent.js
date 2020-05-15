import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Quill from 'quill';
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import { Typography, FormControl, Select, MenuItem } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { EditorWrapper, HeaderContainer, EditorContainer, ToolbarContainer } from '../commonStyle';
import './style.css'
import PinComponent from '../pinComponent/index';

class QuillComponent extends Component {
  editor = null;

  constructor(props) {
    super(props);
    this.state = {
      writeDirection: 'ltr',
    };
  }


  static getEditorOptions() {
    return {
      toolbar: {
        container: "#toolbar",
      },
      placeholder: 'Quill JS Editor..',
      theme: 'snow',
    };
  }

  componentDidMount() {
    this.instantiateEditor();
    this.setEventListeners();
  }

  instantiateEditor() {
    const editorContainerId = document.getElementById(this.props.editorId);

    this.editor = this.createEditor(
      editorContainerId,
      this.getEditorOptions,
    );
  }

  setEventListeners() {
    this.editor.on('text-change', this.onTextChange);
    this.editor.on('selection-change', this.onSelectionChange);
    this.editor.on('editor-change', this.onEditorChange);
  }

  onTextChange = (delta, oldDelta, source) => {}

  onSelectionChange = (rage, oldRage, source) => {}

  onEditorChange = (name, args) => {}

  createEditor(domElement, config) {
    return new Quill(domElement, config);
  }

  updateWriteDirection = (e) => {
    this.setState({ writeDirection: e.target.value })
  }

  handlePin = (e) => {
    e.preventDefault();
    const range = this.editor.getSelection();
    const editorReference = document.getElementsByClassName('ql-editor');
    if (range && editorReference) {
      editorReference[0].id = 'pinUniqueId';
      ReactDOM.render(<PinComponent />, document.getElementById(this.props.editorId))
    }
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
        <ToolbarContainer id="toolbar">
          <button className="button-quill" onClick={this.handlePin}>
            <FontAwesomeIcon icon={faMapPin} />
          </button>
        </ToolbarContainer>
        <EditorContainer id={this.props.editorId} style={{ direction: writeDirection }}/>
      </EditorWrapper>
    );
  }
}

export default QuillComponent;
