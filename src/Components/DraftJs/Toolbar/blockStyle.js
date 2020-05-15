import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { Container, ToolbarItem } from "./common";
import PinComponent from '../../pinComponent/index';

const PinSetup = () => {  
  return <PinComponent />;
};

export const mediaBlockRenderer = block => {

  if (block.getType() === "atomic") {
   return {
    component: PinSetup,
    editable: false,
    props: {},
   };
  }
  
  return null;
};

const customStyles = [
  {
    label: "red-color",
    icon: <FontAwesomeIcon icon={faMapPin} />,
  },
];


export function RenderBlockStyles(props) {
  const { editorState, addBlockState } = props;

  const applyBlockStyle = item => {
    if (item) {
      addBlockState(editorState);
    }
  };

  return (
    <Container>
      {customStyles.map((item, idx) => {
        return (
          <ToolbarItem
            key={`${item.label}-${idx}`}
            onClick={e => applyBlockStyle(item)}
          >
            {item.icon || item.label}
          </ToolbarItem>
        );
      })}
    </Container>
  );
}
