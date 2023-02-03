import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.backCard};
  border-left: 3px solid ${(props) => props.color || props.theme.colors.champagneDark};
  padding: 1rem;

  &:hover {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.color ? props.theme.colors.white : props.theme.colors.black};
    transform: translateX(5px) scale(1.2);
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    &:hover {
      transform: translateX(0) scale(1.02);
    }
  }
`;

export const Name = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: normal;
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: 1.25;
  margin: 1rem 0;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.color || props.theme.colors.champagneDark};
  font-size: ${(props) => props.theme.fontSizes.small};
`;

export const Lang = styled.span`
  color: inherit;
`;

export const Link = styled.a`
  color: inherit;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
`;
