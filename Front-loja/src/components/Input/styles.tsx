import styled from "styled-components/native";

export const Container = styled.View`
  width: 90%;
  height: 65px;
  padding: 8px;
  margin-top: 20px;
  border-width: 1px;
  border-color: #f2dd1c;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: "#9E9E9E",
})`
  width: 100%;
  margin-left: 6px;
  color: #03030396;
  font-weight: bold;
  font-size: 16px;
`;
