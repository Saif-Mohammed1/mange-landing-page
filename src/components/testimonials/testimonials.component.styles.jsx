import styled from "styled-components";
export const TestimonialsContainer = styled.div`
  text-align: center;

  padding: 20px 40px;
`;
export const TestimonialContainer = styled.div`
  display: flex; /* justify-content: space-between; */
  flex-wrap: wrap;
`;
export const Elements = styled.div`
  position: relative;
  background-color: rgb(238, 238, 238);
  padding: 20px;
  text-align: center;
  margin: 40px 20px;
  flex: 1 0 300px;
`;
export const Client = styled.img`
  width: 69px;
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
`;
export const Button = styled.p`
  padding: 10px;
  background-color: #f3603c;
  width: 114px;
  text-align: center;
  border-radius: 20px;
  font-weight: 500;

  cursor: pointer;
  margin: 20px auto;

  &:hover {
    color: white;
  }
`;
