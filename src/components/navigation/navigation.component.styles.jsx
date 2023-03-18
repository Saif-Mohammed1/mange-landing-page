import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const NavigationContainer = styled.div`
  /* background-color: #ffffff; */
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
`;
export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  li {
    padding: 0 10px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
export const Bars = styled(FontAwesomeIcon)`
  display: none;
  @media (max-width: 800px) {
    display: block;
    width: 46px;
    font-size: 36px;
    margin-left: 10px;
    cursor: pointer;
  }
`;
export const SecNavLinks = styled(NavLinks)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px;
  li {
    padding: 10px;
    font-weight: 600;
  }
  @media (min-width: 801px) {
    display: none;
  }
`;
export const ParagraphContainer = styled.div`
  background-color: #f3603c;
  width: 114px;
  text-align: center;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    color: white;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
