import React from "react";
import { RichUtils } from 'draft-js';
import createStyles from "draft-js-custom-styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor, faMapPin } from "@fortawesome/free-solid-svg-icons";
import { Container, ToolbarItem } from "./common";

export const customStyleMap = {
  pinAnnotation: {
    backgroundColor: '#C1561A',
    borderBottom: '2px solid #C1561A',
  },
 };

const { styles, customStyleFn } = createStyles(
  ["font-size", "color", "background-color"],
  "CUSTOM_",
  customStyleMap,
);

const customStyles = [
  {
    label: "red-color",
    icon: <FontAwesomeIcon icon={faAnchor} />,
    styler: editorState => {
      return styles.color.toggle(editorState, "red");
    }
  },
  {
    label: "red-color",
    icon: <FontAwesomeIcon icon={faMapPin} />,
    styler: editorState => {
      return RichUtils.toggleInlineStyle(editorState, 'pinAnnotation');
    }
  }
];

export { customStyles, customStyleFn };

export function RenderCustomStyles(props) {
  const { editorState, updateEditorState } = props;

  const applyCustomStyle = item => {
    if (item) {
      const newEditorState = item.styler(editorState);
      updateEditorState(newEditorState);
    }
  };

  return (
    <Container>
      {customStyles.map((item, idx) => {
        return (
          <ToolbarItem
            key={`${item.label}-${idx}`}
            onClick={e => applyCustomStyle(item)}
          >
            {item.icon || item.label}
          </ToolbarItem>
        );
      })}
    </Container>
  );
}
