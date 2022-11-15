import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://www.hm.com/nt-north/uploads/2022/10/9016-3x2-WOMEN-teaser-1-unwrap-the-magic-1280x853.jpg")
      center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
`;

const Tittle = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px;
  background-color: teal;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  margin: 10px 0px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 13px;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 300;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Tittle>SIGN IN</Tittle>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>FORGOT YOUR PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
