import React, { useState, useRef } from "react";
import styled from "styled-components/native";
import { BLACK_COLOR } from "../colors";

const Join = () => {
  const passwordInput = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitEditing = () => {
    passwordInput.current.focus();
  };

  return (
    <Container>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholderTextColor="white"
        returnKeyType="next"
        returnKeyLabel="next"
        onSubmitEditing={onSubmitEditing}
      />
      <TextInput
        ref={passwordInput}
        secureTextEntry
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholderTextColor="white"
        returnKeyType="done"
        returnKeyLabel="done"
      />
      <Btn>
        <BtnText>Create Account</BtnText>
      </Btn>
    </Container>
  );
};

export default Join;

const Container = styled.View`
  background-color: ${BLACK_COLOR};
  flex: 1;
  align-items: center;
  color: white;
  padding: 60px 20px;
`;
const TextInput = styled.TextInput`
  width: 100%;
  padding: 10px 20px;
  border-radius: 20px;
  margin-bottom: 10px;
  font-size: 16px;
  color: white;
  background-color: rgba(255, 255, 255, 0.5);
`;
const Btn = styled.TouchableOpacity`
  width: 100%;
  padding: 10px 20px;
  border-width: 1px;
  border-radius: 20px;
  border-color: rgba(255, 255, 255, 0.5);
  justify-content: center;
  align-items: center;
`;
const BtnText = styled.Text`
  color: white;
  font-size: 16px;
`;
