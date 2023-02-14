import styled from "styled-components/native";

import { Feather } from "@expo/vector-icons";


export const SearchBg = styled.View`
  flex-direction: row;
  /* height: 100px; */
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

export const SearchBar = styled.View`
  flex-direction: row;
  width: 350px;
  height: 50px;
  border-radius: 5px;
  margin: 5px 0;
  padding-left: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: left;
  /* align-items: center;  */ //using this reduces test input space
`;

export const SearchIcon = styled(Feather)`
  align-self: center;
  font-size: 24px;
  margin-right: 9px;
  color: ${({ theme }) => theme.colors.grey.one};
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 18px;
  /* border-color: black; */
  /* border-width: 1px; */
  margin-left: 9px;
  /* align-self: center; */ //using this reduces test input space
`;
