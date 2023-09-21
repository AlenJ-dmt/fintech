import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { Button, Typography } from "@mui/material";
import { useTransactions } from "../../hooks/useTransactions";
import { BallTriangle } from "react-loader-spinner";
import { Link } from "react-router-dom";

export const Overview = () => {
  const [transactions, loading] = useTransactions();

  return loading ? (
    <LoadingContainer>
      <BallTriangle color={`${colors.green}`} />
    </LoadingContainer>
  ) : (
    <Container>
      <TableHeader>
        <Typography variant="h2">Transacciones</Typography>
        <Button sx={{ flex: 0.8 }} color="secondary" variant="contained">
          <Link style={{ all: "unset" }} to="/add-transaction">
            Agregar
          </Link>
        </Button>
      </TableHeader>

      <TableHeader>
        <Typography variant="h4">comerciante</Typography>
        <Typography variant="h4">Valor</Typography>
      </TableHeader>
      {transactions.map((_) => (
        <Row>
          <Typography variant="h4">{_.merchant}</Typography>
          <Typography variant="h4">{`$${_.value}`}</Typography>
        </Row>
      ))}
    </Container>
  );
};

const TableHeader = styled.div`
  widht: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Row = styled.div`
  widht: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LoadingContainer = styled.div`
  background: ${colors.main};

  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  min-height: 100vh;
`;

const Container = styled.div`
  background: ${colors.main};
  height: 100%;
  width: 100%;
  display: flex;
  flex: 1;
  min-height: 100vh;
  padding: 1rem;
  flex-direction: column;
  gap: 2rem;
`;
