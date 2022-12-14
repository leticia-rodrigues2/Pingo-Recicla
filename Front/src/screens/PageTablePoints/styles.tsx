import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const Container = styled.ScrollView`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;
export const ContainerIcon = styled.TouchableOpacity`
  align-items: flex-end;
  background-color: transparent;
  right: 15px;
  top: 5px;
  position: absolute;
  z-index: 100;
`;
export const Header = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const Content = styled.View`
  width: 100%;
`;
export const ContentTitle = styled.View`
  width: 100%;
  height: 34px;
  align-items: center;
  background-color: #ffc256;
`;

export const ContentInfo = styled.View`
  margin-bottom: 15px;
  flex-direction: row;
  flex: 2;
  justify-content: space-between;
`;
export const ContentPoints = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;
export const Title = styled.Text`
  color: #513826;
  text-align: center;
  font-size: 16px;
  font-weight: bold;

  margin-top: 5px;
`;
export const TextPoints = styled.Text`
  color: #070706;
  text-align: center;
  fontFamily: 'FiraSans-Regular'
  font-size: 14px;
  margin-top:5px;
`;

export const TitlePoints = styled.Text`
  color: #070706;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  margin-top: 7px;
`;
export const View = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  align-items: center;
`;

export const Text = styled.Text`
  text-align: center;
  color: #291808;
  font-size: 20px;
  margin-bottom: 0px;
  margin-top: 10px;
`;
export const TextInitial = styled.Text`
  color: #291808;
  text-align: center;
  font-size: 16px;
  margin-bottom: 10px;
  margin-top: 10px;
`;
export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 45px;
  align-items: center;
  justify-content: center;

  margin-bottom: 5px;
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
export const TextButton = styled.Text`
  color: #291808;
  font-weight: bold;
  font-size: 16px;
`;
export const ImageContentPoints = styled.View`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100px;
  margin-left:30px
  border-radius: 48px;
`;
export const Line = styled.View`
  width: 90%;
  height: 1px;

  margin-left:18px
  background-color: #ffc256;
`;

export const TextContentPoints = styled.View`
  width: 60%;
  height: 100px;
  justify-content: center;
  align-items: center;
`;
export const ImgLogoPoint = styled.Image`
  width: 180px;
  height: 100px;
  border-radius: 8px;
`;
export const TextDiscount = styled.Text`
  color: #513826;
  text-align: center;
  font-size: 16px;
  margin-bottom: 10px;
  margin-top: 10px;
`;
export const ContainerButtton = styled.TouchableOpacity`
  align-items: flex-end;
  background-color: transparent;
  position: absolute;
`;
