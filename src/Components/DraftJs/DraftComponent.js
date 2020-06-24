import React, { Component } from 'react';
import styled from "styled-components";
import { Editor, EditorState, Modifier, CompositeDecorator } from 'draft-js';
import { Typography, FormControl } from '@material-ui/core';
import { EditorWrapper, HeaderContainer, EditorContainer } from '../commonStyle';
import CustomComponent from './CustomComponent';

export const getEntityStrategy = (entityType) => (
  contentBlock,
  callback,
  contentState
) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === entityType;
  }, callback);
};
const COMPOSITE_DECORATOR = new CompositeDecorator([
  {
    strategy: getEntityStrategy('CustomComponent'),
    component: CustomComponent,
  },
]);

const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 48px;
  padding: 5px 7px;
  margin-bottom: 8px;
  border-radius: 2px 2px 0 0;
  box-shadow: 0px 0px 3px 1px rgba(15, 15, 15, 0.17);
`;

class DraftComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(COMPOSITE_DECORATOR),
    }
  }


  updateEditorState = (editorState) => {
    this.setState({ editorState: EditorState.set(editorState, {
      decorator: COMPOSITE_DECORATOR,
    })});
  }

  addCustomComponent = (e) => {
    const { editorState } = this.state;
    e.preventDefault();
    const contentState = editorState.getCurrentContent();
    const selectionState = editorState.getSelection();
    const contentWithEntity = contentState.createEntity('CustomComponent', 'IMMUTABLE', {
      color: 'blue',
      name: 'test',
    });
    const entityKey = contentWithEntity.getLastCreatedEntityKey();
    let newContentState = Modifier.insertText(contentState, selectionState, ' ', undefined, entityKey);
    const endEventPos = selectionState.getAnchorOffset();
    const blockKey = selectionState.getAnchorKey();
    const blockSize = contentState.getBlockForKey(blockKey).getLength();
    // Insert a space if event is placed at the end of a the text
    if (endEventPos === blockSize) {
      newContentState = Modifier.insertText(newContentState, newContentState.getSelectionAfter(), ' ');
    }

    const newEditorState = EditorState.push(editorState, newContentState, 'insert-characters');
    this.setState({ editorState: EditorState.moveFocusToEnd(newEditorState) });
  }

  render() {
    const { editorState } = this.state;
    return (
      <EditorWrapper>
        <HeaderContainer>
          <Typography variant="h5" color="primary">Draft JS Editor</Typography>
          <FormControl variant="outlined">
          </FormControl>
        </HeaderContainer>
        <ToolbarContainer>
          <button onClick={this.addCustomComponent}>Add Custom Component</button>
        </ToolbarContainer>
        <EditorContainer style={{ paddingTop: '40px' }}>
          <Editor
            placeholder="Draft JS Editor..."
            editorState={editorState} 
            onChange={this.updateEditorState}
          />
        </EditorContainer>
      </EditorWrapper>
    );
  }
}

export default DraftComponent;
