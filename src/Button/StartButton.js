import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const Button = styled.button`
  color: ${props => props.theme.color};
  font-size: ${props => props.theme.fontSize};
  margin: ${props => props.theme.margin};
  padding: ${props => props.theme.padding};
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.background};
  display: ${props => props.theme.display};
  width: ${props => props.theme.width};
  height: ${props => props.theme.height};
  font-family: ${props => props.theme.font}
`;


class StartButton extends Component {
    constructor(props){
        super(props);
        this.state ={
            theme: props.theme,
            text: props.text,
        }
    }


    render(){
        const {theme,text} = this.state;
        return(
            <ThemeProvider theme={theme}>
                <Button onClick={this.props.onClick}>{text}</Button>
            </ThemeProvider>
        );
    }
}

export default StartButton;