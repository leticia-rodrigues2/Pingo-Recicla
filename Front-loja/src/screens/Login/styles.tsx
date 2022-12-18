import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const Container = styled.ScrollView`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

export const Header = styled.View`
  width: 100%;
  height: 10%;
  margin-bottom: 200px;
`;
export const TextErro = styled.Text`
  color: #c92c05;
  width: 100%;
  margin-top: 45px;
  text-align: center;
`;

export const ImageContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 27.33px;
  margin-bottom: 27.33px;
`;
export const ImgLogo = styled.Image`
  width: 230px;
  height: 230px;
  justify-content: flex-end;
  padding: 20px;
`;

export const Content = styled.View`
  width: 100%;
  height: 150px;
  align-items: center;
`;

export const View = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 100px;
  align-items: center;
`;

export const Text = styled.Text`
  color: #513826;
  text-align: center;
  font-size: 16px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Button = styled.TouchableOpacity`
  width: 95%;
  height: 55px;
  border-radius: 14px;
  align-items: center;
  justify-content: center;
  background-color: #ffc256;
  margin-bottom: 20px;
`;

export const TextButton = styled.Text`
  color: #291808;
  font-weight: bold;
`;
