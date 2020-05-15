import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Typography, FormControl, Select, MenuItem } from '@material-ui/core';
import { EditorWrapper, HeaderContainer, EditorContainer } from '../commonStyle';
import Toolbar from "./Toolbar/index";
import PinComponent from '../pinComponent/index';

import './style.css';

const avaliableStyle = {
  pin: 'pin',
}

class EditableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      writeDirection: 'ltr',
      docState: '',
      docText: '',
      selectedStyle: '',
    };
  }

  componentDidMount() {
    this.initializeDoc();
    this.setUpListeners();
  }

  initializeDoc() {
    this.setState({
      docState: document.getElementById(this.props.containerId).innerHTML,
    });
  }

  setUpListeners = () => {
    const nodeReference = document.getElementById(this.props.containerId);
    nodeReference.addEventListener('select', this.handleSelection );
  }

  updateWriteDirection = (e) => {
    this.setState({ writeDirection: e.target.value })
  }

  handleSelection = (e) => {
    const { selectedStyle, docText } = this.state;
    
    if (selectedStyle === avaliableStyle.pin) {
      this.setState({ docText: docText + '<p>AAA</p>' }, () => {
        this.setState({ selectedStyle: '' });
      })
    }
  }

  handleDocumentoFocus = () => {
    document.getElementById(this.props.containerId).focus();
    this.setState({ selectedStyle: avaliableStyle.pin });
  }

  handleChange = (e) => {
    this.setState({ docText: e.target.value });
  }

  render() {
    const { writeDirection } = this.state;
    return (
      <EditorWrapper>
        <HeaderContainer>
          <Typography variant="h5" color="secondary">Editable Editor</Typography>
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
          handleDocumentoFocus={this.handleDocumentoFocus}
        />
        <EditorContainer style={{ direction: writeDirection }}>
          <textarea
            id={this.props.containerId}
            className="editableContainer"
            contentEditable="true" placeholder="Editable Editor..."
            value={this.state.docText}
            onChange={this.handleChange}
            />
        </EditorContainer>
      </EditorWrapper>
    );
  }
}

export default EditableComponent;
