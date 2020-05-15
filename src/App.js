import React, { Component } from 'react';
import styled from "styled-components";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Button from '@material-ui/core/Button';
import DrafComponent from './Components/DraftJs/DraftComponent';
import QuillComponent from './Components/QuillJs/QuillComponent';
import EditableComponent from './Components/EditableContent/EditableComponent';
import './App.css';

const ContainerWrapper = styled.div`
  min-width: 900px;
  height: 100vh;
  margin-top: 1em;
`;

const availableLibraries = {
  draftJS: 'DraftJS',
  quillJS: 'QuillJS',
  editableContent: 'Editable',
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLibrary: availableLibraries.draftJS,
    };
  };

  changeLibraryEditor = (e, value) => {
    e.preventDefault();
    this.setState({ selectedLibrary: value });
  }

  render() {
    const { selectedLibrary } = this.state;
    return (
      <ContainerWrapper>
        <Breadcrumbs aria-label="breadcrumb">
          <Button
            value={availableLibraries.draftJS}
            onClick={(e, value=availableLibraries.draftJS) => this.changeLibraryEditor(e, value)}
            variant="contained"
            color="primary">
            {availableLibraries.draftJS}
          </Button>
          <Button
            value={availableLibraries.quillJS}
            onClick={(e, value=availableLibraries.quillJS) => this.changeLibraryEditor(e, value)}
            variant="contained"
            color="secondary">
            {availableLibraries.quillJS}
          </Button>
          <Button
            value={availableLibraries.editableContent}
            onClick={(e, value=availableLibraries.editableContent) => this.changeLibraryEditor(e, value)}
            variant="contained"
            style={{ backgroundColor: '#4caf50', color: 'white' }}>
            {availableLibraries.editableContent}
          </Button>
        </Breadcrumbs>
        {selectedLibrary === availableLibraries.draftJS && <DrafComponent />}
        {selectedLibrary === availableLibraries.quillJS && <QuillComponent editorId={"quillContainer"} />}
        {selectedLibrary === availableLibraries.editableContent && <EditableComponent />}
      </ContainerWrapper>
    );
  }
}

export default App;
