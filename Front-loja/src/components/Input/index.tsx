import React, { ReactElement } from "react";

import { Container, TextInput } from "./styles";

interface propsInpuit {
  icon: ReactElement | false;
  placeholder: string;
  secureTextEntry?: boolean;
  inputRef?: any;
  returnKeyType: "done" | "go" | "next" | "search" | "send";
  keyboardType?:
    | "default"
    | "email-address"
    | "numeric"
    | "phone-pad"
    | "number-pad"
    | "decimal-pad"
    | "name"
    | "cpf";
  onChangeText: (text: string) => void;
  onSubmitEditing?: () => void;
}

const App: React.FC<propsInpuit> = ({
  icon,
  placeholder,
  inputRef,
  secureTextEntry,
  returnKeyType,
  keyboardType,
  onChangeText,
  onSubmitEditing,
}) => {
  return (
    <Container>
      {icon && icon}
      <TextInput
        ref={inputRef}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={returnKeyType}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        autoCorrect={false}
        autoCapitalize="none"
      />
    </Container>
  );
};

export default App;
