import React, { Component } from 'react';
import { Editor, EditorState, Modifier, AtomicBlockUtils } from 'draft-js';
import Immutable from 'immutable';
import Toolbar from "./Toolbar/index";
import { customStyleFn, customStyleMap } from "./Toolbar/customStyles";
import { Typography, Select, MenuItem, FormControl } from '@material-ui/core';
import { EditorWrapper, HeaderContainer, EditorContainer } from '../commonStyle';
import { mediaBlockRenderer } from './Toolbar/blockStyle';

const blockRenderMap = Immutable.Map({
  'header-two': {
    element: 'h2'
  },
  'unstyled': {
    element: 'div',
    aliasedElements: ['p'],
  },
});

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

  updateWriteDirection = (e) => {
    this.setState({ writeDirection: e.target.value })
  }

  addBlockState = (editorState) => {
    let newContentState;
    let newEditorState;
    const contentstate = editorState.getCurrentContent();
    const selectionState = editorState.getSelection();
    newContentState = contentstate.createEntity('paragraph', 'MUTABLE', { src: 'teste' });
    
    const entityKey = contentstate.getLastCreatedEntityKey();
    newContentState = Modifier.applyEntity(newContentState, selectionState, entityKey);
    newEditorState = EditorState.push(editorState, newContentState, 'apply-entity');
    this.setState({
      editorState: AtomicBlockUtils.insertAtomicBlock(
        newEditorState,
        entityKey,
        ""
       ),
    })
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
            addBlockState={this.addBlockState}
          />
        <EditorContainer style={{ direction: writeDirection }}>
          <Editor
            placeholder="Draft JS Editor..."
            editorState={editorState} 
            onChange={this.updateEditorState}
            customStyleFn={customStyleFn}
            customStyleMap={customStyleMap}
            spellCheck={true}
            blockRendererFn={mediaBlockRenderer}
            blockRenderMap={blockRenderMap}
          />
        </EditorContainer>
      </EditorWrapper>
    );
  }
}

export default DraftComponent;
