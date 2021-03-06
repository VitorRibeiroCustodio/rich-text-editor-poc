import styled from "styled-components";

export const EditorWrapper = styled.div`
  min-width: 700px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin-top: 3em;
`;

export const HeaderContainer = styled.div`
margin-bottom: 20px;
display: flex;
flex-direction: row;
justify-content: space-between;
`;

export const EditorContainer = styled.div`
display: flex;
min-height: 9em;
border-radius: 0 0 3px 3px;
background-color: #fff;
padding: 5px;
font-size: 17px;
font-weight: 300;
box-shadow: 0px 0px 3px 1px rgba(15, 15, 15, 0.17);
`;

export const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 48px;
  padding: 5px 7px;
  margin-bottom: 8px;
  border-radius: 2px 2px 0 0;
  box-shadow: 0px 0px 3px 1px rgba(15, 15, 15, 0.17);
`;