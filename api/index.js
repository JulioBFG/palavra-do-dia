import axios from "axios";

const showWord = async () => {
  const randomWordRequest = "https://api.dicionario-aberto.net/random";
  const response = await axios.get(randomWordRequest);
  return response;
};

export const retrieveMeaning = async (word) => {
  const response = axios.get(`https://api.dicionario-aberto.net/word/${word}`);
  return response;
};

export default showWord;
