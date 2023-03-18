import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(560px, 1fr));
  p {
    color: #b2b5b9;
  }
  padding: 20px 40px;
  @media (max-width: 800px) {
    text-align: center;
    padding: 0;
  }
`;

export const Button = styled.p`
  padding: 10px;
  background-color: #f3603c;
  width: 114px;
  text-align: center;
  border-radius: 20px;
  font-weight: 500;

  cursor: pointer;
  &:hover {
    color: white;
  }
`;
export const Header = styled.div`
  padding: 0;
  @media (max-width: 800px) {
    p {
      margin: 10px auto;
    }
  }
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
  p {
    font-size: 2em;
    padding: 13px;
    background-color: rgb(243, 97, 60);
    border-radius: 27px;
    margin-right: 6px;
    text-align: center;
    width: 60px;
    color: white;
  }
  h1 {
    text-indent: 18px;
  }
  @media (max-width: 800px) {
    margin-left: 25%;
    background-color: #fff0ec;
    p {
      margin: 0;
    }
  }
`;
export const Text = styled.p`
  padding-left: 73px;
`;
