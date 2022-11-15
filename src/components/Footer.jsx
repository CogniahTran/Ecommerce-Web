import { Email, Facebook, Instagram } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  background-color: #e4e4e4;
  display: block;
`;

const Top = styled.div`
  padding: 20px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;
const Left = styled.div`
  padding: 0px 20px;
`;
const TitleLeft = styled.h3`
  margin-bottom: 10px;
`;
const ListLeft = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Right = styled.div`
  padding: 0px 20px;
`;
const TitleRight = styled.h3`
  margin-bottom: 10px;
`;
const ListRight = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  cursor: pointer;
  font-size: 13px;
  margin-bottom: 10px;
`;

const Bottom = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
  text-align: center;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const Footer = () => {
  return (
    <Container>
      <Top>
        <Left>
          <TitleLeft>Corporate Info</TitleLeft>
          <ListLeft>
            <ListItem>About Us</ListItem>
            <ListItem>Sustainability</ListItem>
            <ListItem>Press</ListItem>
            <ListItem>Investor Relations</ListItem>
            <ListItem>Corporate Governance</ListItem>
          </ListLeft>
        </Left>
        <Right>
          <TitleRight>Help</TitleRight>
          <ListRight>
            <ListItem>Customer Service</ListItem>
            <ListItem>Privacy Notice</ListItem>
            <ListItem>Payment</ListItem>
          </ListRight>
        </Right>
      </Top>
      <Bottom>
        <Logo>2210 STORE.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus
          orci ac auctor augue mauris. Integer vitae justo eget magna fermentum.
          Urna molestie at elementum eu facilisis sed odio morbi. Ornare
          suspendisse sed nisi lacus.
        </Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="ff0000">
            <Email />
          </SocialIcon>
        </SocialContainer>
      </Bottom>
    </Container>
  );
};

export default Footer;
