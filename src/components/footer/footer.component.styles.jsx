import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
export const FirstSection = styled.div`
  padding: 20px 30px;
  background-color: #f06239;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    width: 50%;
  }
  @media (max-width: 750px) {
    flex-direction: column;
    text-align: center;
  }
`;
export const Button = styled.p`
  padding: 10px;
  background-color: white;
  width: 114px;
  text-align: center;
  border-radius: 20px;
  color: #f06239;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
export const SecSection = styled.div`
  display: flex;
  background-color: rgb(30 30 38);
  justify-content: space-between;

  padding: 20px 30px;

  ul {
    list-style: none;
    li {
      padding: 6px;
      &:hover {
        color: #f06239;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    position: relative;
  }
`;
export const SecSectionContainer = styled.div`
  text-align: center;
  @media (max-width: 750px) {
    order: 3;
    display: flex;
    flex-direction: column-reverse;
    ul {
      margin-top: 10px;

      li {
        margin-bottom: 30px;
      }
    }
    svg {
      margin-bottom: 20px;
    }
  }
`;
export const Link = styled.div`
  display: flex;
  @media (max-width: 750px) {
    order: 2;
  }
`;
export const Form = styled.div`
  position: relative;
  form {
    input {
      padding: 10px;
      border-radius: 18px;
      outline: none;
    }
    button {
      padding: 10px;
      border-radius: 18px;
      width: 55px;
      margin-left: 8px;
      cursor: pointer;
      font-weight: 600;

      &:hover {
        background-color: #f06239;
        color: white;
      }
    }
  }
  @media (max-width: 750px) {
    order: 1;
    position: unset;
  }
`;
const base = styled(FontAwesomeIcon)`
  padding: 2px;
  width: 15px;
  border-radius: 50%;
  margin-bottom: 6px;
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
    margin-top: -5px;
  }
`;
export const Links = styled.ul`
  list-style: none;
  flex-direction: row;
  display: flex;
  margin-top: 85px;
  padding: 0;
`;
export const Icons = styled(base)`
  background-color: ${({ bg }) => bg};
`;
export const Copyright = styled.p`
  bottom: 0;
  position: absolute;
  color: hsl(227, 12%, 61%);
  font-size: 12px;
  right: 0;
  @media (max-width: 750px) {
    right: 50%;
    transform: translate(50%, 50%);
    bottom: 4px;
  }
`;
