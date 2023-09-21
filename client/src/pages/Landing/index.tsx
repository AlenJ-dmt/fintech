import styled from "@emotion/styled";
import IMAGES from "../../assets/images";
import { Button, Typography } from "@mui/material";
import { colors } from "../../styles/colors";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <Container>
      <HeaderContainer>
        <Typography variant="h1">FinteCO</Typography>
        <Typography variant="h4">
          Gestiona tus finanzas con destreza, elabora informes detallados y
          presupuestos sólidos para alcanzar la ansiada libertad financiera.
        </Typography>
      </HeaderContainer>
      <ActionButtonContainer>
        <Button size="large" variant="outlined">
          <Link style={{all: "unset"}} to={"/overview"}>Iniciar sesion</Link>
        </Button>
        <Button size="large" color="secondary" variant="contained">
          Registrarse
        </Button>
      </ActionButtonContainer>

      <img style={{ height: 300 }} src={IMAGES.card} />
    </Container>
  );
};

const ActionButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const HeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1.5rem;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  background: ${colors.main};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 4rem;
`;
