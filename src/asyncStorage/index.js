import {Constants} from '../constants';
import AsyncStorage from '@react-native-community/async-storage';

export async function saveUsername(username) {
  try {
    await AsyncStorage.setItem(Constants.login.username, username);
  } catch (e) {
    console.log(e);
  }
}

export async function getUsername() {
  const username = await AsyncStorage.getItem(Constants.login.username);
  console.log(username);
  return username !== null ? username : '';
}

export async function saveLogado(logado) {
  await AsyncStorage.setItem(Constants.login.logado, JSON.stringify(logado));
}

export async function getLogado() {
  const logado = await AsyncStorage.getItem(Constants.login.logado);
  return JSON.parse(logado) !== null ? JSON.parse(logado) : false;
}
