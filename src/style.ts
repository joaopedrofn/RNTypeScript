import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('window');

const buttonHeight: number = height / 6;
const fontSize: number = height / 10;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Input = styled.Text`
  width: ${width}px;
  background-color: #607d8b;
  height: ${buttonHeight}px;
  text-align-vertical: center;
  text-align: right;
  color: #fff;
  padding: 10px;
  font-size: ${fontSize}px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({number, operation, extra}) =>
    number ? '#eceff1' : operation ? '#80cbc4' : '#90a4ae'};
  width: ${({double}) => (double ? width / 2 : width / 4)}px;
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
