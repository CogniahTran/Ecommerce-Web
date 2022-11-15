import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: lightpink;
  /* padding: 20px; */
`;

const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const Input = styled.input`
  border: none;
  flex: 8;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  cursor: pointer;
  color: white;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  width: 40%;
  height: 40px;
  display: flex;
  border: 1px solid lightgray;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 5px;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title> Newsletter</Title>
      <Description>Get timely updates from your favourite wears</Description>
      <InputContainer>
        <Input placeholder="Your Email:" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
