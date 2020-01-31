import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('window');

const buttonHeight: number = height / 6 - 4;
const fontSize: number = height / 10;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Input = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: 'head',
})`
  width: ${width}px;
  background-color: #607d8b;
  height: ${buttonHeight}px;
  text-align-vertical: center;
  text-align: right;
  color: #fff;
  padding-left: 10px;
  padding-right: 10px;
  font-size: ${fontSize}px;
`;

export const Number = styled.TouchableOpacity`
  background-color: #eceff1;
  width: ${width / 4}px;
  align-items: center;
  justify-content: center;
  height: ${buttonHeight}px;
`;

export const Operation = styled.TouchableOpacity`
  background-color: #80cbc4;
  width: ${width / 4}px;
  align-items: center;
  justify-content: center;
  height: ${buttonHeight}px;
`;

export const Extra = styled.TouchableOpacity`
  background-color: #90a4ae;
  width: ${width / 4}px;
  align-items: center;
  justify-content: center;
  height: ${buttonHeight}px;
`;

export const Double = styled.TouchableOpacity`
  background-color: #eceff1;
  width: ${width / 2}px;
  align-items: center;
  justify-content: center;
  height: ${buttonHeight}px;
`;

export const ButtonText = styled.Text`
  text-align-vertical: center;
  text-align: center;
  font-size: ${fontSize}px;
`;

export const ButtonIcon = styled(Icon)`
  text-align-vertical: center;
  text-align: center;
  font-size: ${fontSize}px;
`;
