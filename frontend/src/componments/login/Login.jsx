import React, { useMemo, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
  CircularProgress,
} from "@chakra-ui/react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onClickLogin = async () => {
    console.log(`username: ${username} and password: ${password}`);
    var result = null;
    var obj = {
      username: username,
      password: password,
    };
    await fetch(`http://localhost:8000/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((data) => {
        result = data.data;
      });

    console.log(result);
    if (result === true) {
      var exist_session = localStorage.getItem("session")
      if (!exist_session) {
        localStorage.setItem("session", JSON.stringify({
          username: username,
          expire: new Date().getTime() + 3600000,
        }));
      }
      
    }
    window.location.reload(false);
    window.location.href = 'member';
  };

  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <img
            src="html.png"
            style={{
              width: "50%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            alt="this is a logo"
          />
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg.surface" }}
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="uername">Username</FormLabel>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormControl>
            </Stack>
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </Stack>
            <Stack spacing="5">
              <Button colorScheme="blue" onClick={onClickLogin}>
                Login
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Login;
