import styled from "styled-components/native";

export const Container = styled.View`
  width: 90%;
  height: 55px;
  padding: 8px;
  margin-top: 20px;
  border-width: 1px;
  border-color: #442c03;
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
`;
