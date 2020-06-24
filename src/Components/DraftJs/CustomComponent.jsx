import React from 'react';

const CustomComponent = ({ contentState, entityKey, offsetKey, decoratedText }) => {
  const { color, name } = contentState.getEntity(entityKey).getData();
  return (
    <span
      data-offset-key={offsetKey}
      style={{ position: 'relative' }}
      >
      <span style={{
        position: 'absolute',
        width: '4px',
        height: '31px',
        backgroundColor: color,
       }}/>
      <span style={{
        position: 'absolute',
        top: '-24px',
        left: '10px',
      }} contentEditable={false}>
        {name}
      </span>
      <span data-text>{decoratedText}</span>
    </span>
  );
};

export default CustomComponent;
