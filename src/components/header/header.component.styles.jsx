import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  p {
    color: #b2b5b9;
  }
  padding: 20px 40px;
  img {
    /* max-width: 72%; */
    min-width: 200px;
    max-width: 100%;
    /* width: 400px; */
  }
  @media (max-width: 800px) {
    text-align: center;
    grid-template-columns: repeat(1, minmax(200px, 1fr));
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
    .track {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
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
    font-weight: 500;
    font-size: 14px;
  }
  @media (max-width: 800px) {
    background-color: #fff0ec;
    border-radius: 25px;

    p {
      margin: 0;
    }
  }
`;
export const Text = styled.p`
  padding-left: 73px;
`;
