import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { Button, TextField, Typography } from "@mui/material";
import { ITransaction } from "../../model/ITransaction";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const handleAddTransaction = async (body: ITransaction) => {
  const response = await fetch("http://18.220.110.23:8000/api/transactions/", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

export const AddForm = () => {
  const navigate = useNavigate();
  const [merchant, setMerchant] = useState("");
  const [value, setValue] = useState("");

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleAddTransaction({ value, merchant });
    navigate(-1);
  };

  return (
    <Container>
      <Typography variant="h2">Agregar transaccion</Typography>
      <Form onSubmit={handleForm}>
        <Typography variant="h4">Comerciante</Typography>
        <TextField
          required
          value={merchant}
          onChange={(e) => setMerchant(e.target.value)}
          variant="outlined"
        />
        <Typography variant="h4">Valor</Typography>
        <TextField
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="secondary">
          Agregar
        </Button>
      </Form>
    </Container>
  );
};

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
