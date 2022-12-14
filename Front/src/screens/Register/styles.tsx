import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const Container = styled.ScrollView`
  width: 100%;
  height: 100%;

  background-color: #fff;
`;

export const Header = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const ImageContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px; ;
`;
export const ImgLogo = styled.Image`
  width: 150px;
  height: 150px;
  justify-content: flex-end;
`;

export const Content = styled.View`
  width: 100%;
  height: 400px;
  align-items: center;
`;
export const ContentTitle = styled.View`
  width: 100%;
  height: 34px;
  align-items: center;
  background-color: #ffc256;
`;
export const Title = styled.Text`
  color: #513826;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 5px;
`;

export const View = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;

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
  width: 80%;
  height: 45px;
  margin-top: 40px;
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
export const TextErro = styled.Text`
  color: #f72104;
  margin-top: 7px;
`;
