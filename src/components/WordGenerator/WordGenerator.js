import { useState } from "react";

import { Box, Button } from "@chakra-ui/react";
import * as XML from "xml2js";
import showWord, { retrieveMeaning } from "../../../api";

const WordGenerator = () => {
  const [xmlData, setXmlData] = useState("");
  const parseXML = () => {
    return XML.parseString(xmlData.xml);
  };
  const handleClick = async () => {
    const { data } = await showWord();
    const meaning = await retrieveMeaning(data.word);

    setXmlData(meaning.data[0]);
    const test = await parseXML();
    console.log(xmlData, test);
    // then(() => {
    //   console.log(meaning);

    //   console.log(test);
    // });
    console.log(data, meaning.data[0]);
  };

  return (
    <Box display="flex" bg="grey">
      <Button margin="auto" onClick={handleClick}>
        Generate
      </Button>
      <div>{parseXML()}</div>
    </Box>
  );
};

export default WordGenerator;
