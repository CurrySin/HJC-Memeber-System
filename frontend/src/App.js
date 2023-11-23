import React, { useMemo, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Login from "./componments/login/Login";
import Memeber from "./componments/member/member";
import {
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Box,
  Spacer,
} from "@chakra-ui/react";
import "./App.css";

function App() {
  const [haveSession, setHaveSession] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("session")) {
      setHaveSession(true);
    }
  });

  function onClickLogOut() {
    localStorage.removeItem("session");
    window.location.href = '/';
  }

  return (
    <Router>
      <div>
        <ul>
          <Flex minWidth="max-content" alignItems="center" gap="2" style={{margin:"10px"}}>
            <Box p="2">
              <Heading size="md">JCI Harbour</Heading>
            </Box>
            <ButtonGroup gap="2" style={{display: haveSession? 'block': 'none'}}>
              <Button colorScheme="teal">Memeber</Button>
            </ButtonGroup>
            <Spacer />
            <ButtonGroup gap="2" style={{display: haveSession? 'none': 'block'}}>
              <Button colorScheme="teal" to="/">
                Log In
              </Button>
            </ButtonGroup>
            <ButtonGroup gap="2" style={{display: haveSession? 'block': 'none'}}>
              <Button colorScheme="red" onClick={onClickLogOut}>
                Log Out
              </Button>
            </ButtonGroup>
          </Flex>
        </ul>

        <hr />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/member" element={<Memeber />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
