import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 1rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Avatar = styled.img`
  align-self: center;
  border-radius: 50%;
  width: 60%;
  margin-bottom: 1rem;

  @media screen and (max-height: ${(props) => props.theme.breakpoints.md}){
    width: 50%;
    margin-bottom: 0;
}

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 70px;
    height: 70px;
    margin-right: 1rem;
    margin-bottom: 0;
  }
`;

export const Login = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.title};
  justify-content: center;
  text-align: center;
`;

export const Name = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.subtitle};
  font-weight: normal;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const Inner = styled.div`
  padding: 1rem;

  @media screen and (max-height: ${(props) => props.theme.breakpoints.md}){
    padding: 0;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const Back = styled(Link)`
  background: transparent;
  color: ${(props) => props.theme.colors.text};
  border: none;
  display: flex;
  align-items: center;
  text-align: left;

  svg {
    margin-right: 5px;
  }

  &:hover{
    color: rgba(255, 255, 255, 0.5)
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 0 1rem;
    margin-right: 30px;
  }
`;

export const Data = styled.p`
  display: flex;
  align-items: center;
  line-height: 1.5;

  svg {
    margin-right: 10px;
  }
`;
