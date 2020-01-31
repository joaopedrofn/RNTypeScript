import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {
  Container,
  Input,
  ButtonText,
  ButtonIcon,
  Extra,
  Operation,
  Number,
  Double,
} from 'style';

const App: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [isResult, setIsResult] = useState(false);

  const numberPressed: Function = (value: string) => {
    if (display === '0') {
      setDisplay(value);
    } else {
      setDisplay((isResult ? '' : display) + value);
    }
  };

  const clearScreen: Function = () => {
    setDisplay('0');
  };

  const floatPointPressed: Function = () => {
    if (display.includes('.')) {
      return;
    } else {
      setDisplay((isResult ? '0' : display) + '.');
    }
  };

  const operationPressed: Function = (value: string) => {
    const lastChar: string = display[display.length - 1];
    if (
      !(parseFloat(lastChar) >= 0) &&
      !(parseFloat(lastChar) <= 9) &&
      lastChar !== '.'
    ) {
      return;
    }
    setDisplay((lastChar === '.' ? display + '0' : display) + value);
  };

  const percentagePressed: Function = () => {
    const value: number = calculate();
    setDisplay((value / 100).toString());
  };

  const shift: Function = () => {
    const value: number = calculate();
    setDisplay((value * -1).toString());
  };

  const calculate: Function = (): number => {
    setIsResult(true);
    // eslint-disable-next-line no-eval
    return parseFloat(eval(display));
  };

  const buttonPressed: Function = (value: string) => {
    if (isResult) {
      setIsResult(false);
    }
    switch (value) {
      case 'AC':
        clearScreen();
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        numberPressed(value);
        break;
      case '.':
        floatPointPressed();
        break;
      case '*':
      case '/':
      case '+':
      case '-':
        operationPressed(value);
        break;
      case '%':
        percentagePressed();
        break;
      case '+-':
        shift();
        break;
      case '=':
        setDisplay(calculate().toString());
        break;
      default:
        return;
    }
  };
  return (
    <>
      <StatusBar backgroundColor="#607d8b" />
      <Container>
        <Input>{display}</Input>
        <Extra onPress={() => buttonPressed('AC')}>
          <ButtonText>AC</ButtonText>
        </Extra>
        <Extra onPress={() => buttonPressed('+-')}>
          <ButtonIcon name="contrast" />
        </Extra>
        <Extra onPress={() => buttonPressed('%')}>
          <ButtonText>%</ButtonText>
        </Extra>
        <Operation onPress={() => buttonPressed('/')}>
          <ButtonIcon name="division" />
        </Operation>
        <Number onPress={() => buttonPressed('7')}>
          <ButtonText>7</ButtonText>
        </Number>
        <Number onPress={() => buttonPressed('8')}>
          <ButtonText>8</ButtonText>
        </Number>
        <Number onPress={() => buttonPressed('9')}>
          <ButtonText>9</ButtonText>
        </Number>
        <Operation onPress={() => buttonPressed('*')}>
          <ButtonIcon name="close" />
        </Operation>
        <Number onPress={() => buttonPressed('4')}>
          <ButtonText>4</ButtonText>
        </Number>
        <Number onPress={() => buttonPressed('5')}>
          <ButtonText>5</ButtonText>
        </Number>
        <Number onPress={() => buttonPressed('6')}>
          <ButtonText>6</ButtonText>
        </Number>
        <Operation onPress={() => buttonPressed('-')}>
          <ButtonIcon name="minus" />
        </Operation>
        <Number onPress={() => buttonPressed('1')}>
          <ButtonText>1</ButtonText>
        </Number>
        <Number onPress={() => buttonPressed('2')}>
          <ButtonText>2</ButtonText>
        </Number>
        <Number onPress={() => buttonPressed('3')}>
          <ButtonText>3</ButtonText>
        </Number>
        <Operation onPress={() => buttonPressed('+')}>
          <ButtonIcon name="plus" />
        </Operation>
        <Double onPress={() => buttonPressed('0')}>
          <ButtonText>0</ButtonText>
        </Double>
        <Number onPress={() => buttonPressed('.')}>
          <ButtonText>.</ButtonText>
        </Number>
        <Operation onPress={() => buttonPressed('=')}>
          <ButtonIcon name="equal" />
        </Operation>
      </Container>
    </>
  );
};

export default App;
