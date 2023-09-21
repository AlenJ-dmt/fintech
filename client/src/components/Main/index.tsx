import styled from "@emotion/styled";
import { Route, Routes } from "react-router-dom";
import { Landing } from "../../pages/Landing";
import { Overview } from "../../pages/Overview";
import { AddForm } from "../../pages/AddForm";
export const Main = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/add-transaction" element={<AddForm />} />
      </Routes>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
`;
