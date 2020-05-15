import React, { Component } from 'react';
import { Typography, FormControl, Select, MenuItem } from '@material-ui/core';
import { EditorWrapper, HeaderContainer, EditorContainer } from '../commonStyle';

class EditableComponent extends Component {
  editor = null;

  constructor(props) {
    super(props);
    this.state = {
      writeDirection: 'ltr',
    };
  }


  updateWriteDirection = (e) => {
    this.setState({ writeDirection: e.target.value })
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
        <EditorContainer style={{ direction: writeDirection }}/>
      </EditorWrapper>
    );
  }
}

export default EditableComponent;
