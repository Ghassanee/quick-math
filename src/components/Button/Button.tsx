import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { MyText } from '../MyText';

const styles = {
  root: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
  },
};

const Button = ({
  title,
  width,
  height,
  color,
  backgroundColor,
  onPress,
  children,
  textStyle,
  style,
}: any) => {
  const btnStyle = [styles.root, { width, height, backgroundColor }, style];
  const txtStyle = [styles.text, { color }, textStyle];
  return (
    <TouchableOpacity onPress={onPress} style={btnStyle}>
      {title && <MyText style={txtStyle}>{title}</MyText>}
      {children}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  onPress: PropTypes.func,
  children: PropTypes.string,
  textStyle: PropTypes.shape({}),
  style: PropTypes.shape({}),
};

Button.defaultProps = {
  title: null,
  width: 'auto',
  height: 'auto',
  color: 'black',
  backgroundColor: '#cacaca',
  onPress: () => {},
  children: null,
  textStyle: {},
  style: {},
};

export default Button;
