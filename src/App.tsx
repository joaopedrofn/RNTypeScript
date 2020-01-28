import React from 'react';
import {StatusBar} from 'react-native';
import {Container, Input, ButtonText, Button, ButtonIcon} from 'style';

const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#607d8b" />
      <Container>
        <Input>0</Input>
        <Button extra>
          <ButtonText>AC</ButtonText>
        </Button>
        <Button extra>
          <ButtonIcon name="contrast" />
        </Button>
        <Button extra>
          <ButtonText>%</ButtonText>
        </Button>
        <Button operation>
          <ButtonIcon name="division" />
        </Button>
        <Button number>
          <ButtonText>7</ButtonText>
        </Button>
        <Button number>
          <ButtonText>8</ButtonText>
        </Button>
        <Button number>
          <ButtonText>9</ButtonText>
        </Button>
        <Button operation>
          <ButtonIcon name="close" />
        </Button>
        <Button number>
          <ButtonText>4</ButtonText>
        </Button>
        <Button number>
          <ButtonText>5</ButtonText>
        </Button>
        <Button number>
          <ButtonText>6</ButtonText>
        </Button>
        <Button operation>
          <ButtonIcon name="minus" />
        </Button>
        <Button number>
          <ButtonText>1</ButtonText>
        </Button>
        <Button number>
          <ButtonText>2</ButtonText>
        </Button>
        <Button number>
          <ButtonText>3</ButtonText>
        </Button>
        <Button operation>
          <ButtonIcon name="plus" />
        </Button>
        <Button number double>
          <ButtonText>0</ButtonText>
        </Button>
        <Button number>
          <ButtonText>.</ButtonText>
        </Button>
        <Button operation>
          <ButtonIcon name="equal" />
        </Button>
      </Container>
    </>
  );
};

export default App;
