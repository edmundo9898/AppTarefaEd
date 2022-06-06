import styled from 'styled-components';


export const Container = styled.View`
flex: 1;
background-color: #121212;
align-items: center;
justify-content: center;


`;

export const  ContainerTextStart = styled.View`
width: 100%;
height: 30px;
align-items: center;
justify-content: space-between ;
margin-bottom: 15px;
margin-top: 40px;
padding-left: 15px;
padding-right: 30px;
flex-direction: row;
`;

export const TextStart = styled.Text`
color: #00cc44;
font-size: 25px;
font-weight: bold;
`;

export const AreaList = styled.FlatList`
padding: 15px;
width: 100%;
flex: 1;
margin-bottom: 10px;

`;


export const AreaAdd = styled.View`
width: 100%;
height: 80px;
flex-direction: row;
justify-content: space-around ;
align-items: center;
padding: 10px;

`;

export const InputAdd = styled.TextInput`
width: 80%;
height: 45px;
background-color: #fff;
border-radius: 10px;
padding: 10px;

`;

export const BtnAdd = styled.TouchableOpacity`
height: 45px;
align-items: center;
justify-content: center;

`;

