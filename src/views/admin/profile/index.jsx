/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import React, { useState } from 'react';
import axios from 'axios';

import tableDataComplexPrediction from "views/admin/default/variables/tableDataComplex.json";

import ComplexTable from "views/admin/default/components/ComplexTable";

import { useTable, useSortBy } from 'react-table';



// Chakra imports
import {

  Box,
  FormControl,
  FormLabel,
  Button,
 
  Container,

  SliderMark,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  Flex
} from "@chakra-ui/react";
import { columnsDataComplexPrediction } from "views/admin/default/variables/columnsData";
import { ThemeEditorAccordionItem } from "@hypertheme-editor/chakra-ui";
import { CgSleep } from "react-icons/cg";


// Custom components

export default function Overview() {
  const format = (val) => `$` + val;

  const [score1, setScore1] = React.useState(0);
  const [score2, setScore2] = React.useState(0);
  const [score3, setScore3] = React.useState(0);
  const [score4, setScore4] = React.useState(0);
  const [score5, setScore5] = React.useState(0);
  const [score6, setScore6] = React.useState(0);
  const [score7, setScore7] = React.useState(0);
  const [score8, setScore8] = React.useState(0);
  const [score9, setScore9] = React.useState(0);
  const [score10, setScore10] = React.useState(0);
  const [score11, setScore11] = React.useState(0);

  let estData = [
    {
        "": 0,
        "status": "closed",
        "Subgenres": "Baseball Sports",
        "Break-even Day": 27.28,
        "Retention Day-1": 69,
        "Retention Day-7": 56,
        "Retention Day-14": 50,
        "Retention Day-30": 42,
        "Success Rate": 72.8,
        "Average Retention Rate": 54.25,
        "Genres": "Sports",
        "Downloads": 688842,
        "dats": 1,
        "Score": score1
    },
    {
        "": 1,
        "status": "operating",
        "Subgenres": "Basketball Sports",
        "Break-even Day": 27.28,
        "Retention Day-1": 69,
        "Retention Day-7": 56,
        "Retention Day-14": 50,
        "Retention Day-30": 42,
        "Success Rate": 79.4,
        "Average Retention Rate": 54.25,
        "Genres": "Sports",
        "Downloads": 145459,
        "dats": 1,
        "Score": score2
    },
    {
        "": 2,
        "status": "operating",
        "Subgenres": "Bold Action",
        "Break-even Day": 27.33,
        "Retention Day-1": 45,
        "Retention Day-7": 30,
        "Retention Day-14": 28,
        "Retention Day-30": 25,
        "Success Rate": 82.7,
        "Average Retention Rate": 32,
        "Genres": "Action",
        "Downloads": 523609,
        "dats": 1,
        "Score": score3
    },
   
    {
        "": 3,
        "status": "operating",
        "Subgenres": "Table Strategy",
        "Break-even Day": 27.83,
        "Retention Day-1": 65,
        "Retention Day-7": 48,
        "Retention Day-14": 44,
        "Retention Day-30": 40,
        "Success Rate": 84.2,
        "Average Retention Rate": 49.25,
        "Genres": "Strategy",
        "Downloads": 91214,
        "dats": 1,
        "Score": score4
    },
    {
        "": 4,
        "status": "operating",
        "Subgenres": "Sandbox",
        "Break-even Day": 27.5,
        "Retention Day-1": 67,
        "Retention Day-7": 49,
        "Retention Day-14": 44,
        "Retention Day-30": 37,
        "Success Rate": 79.4,
        "Average Retention Rate": 49.25,
        "Genres": "Sandbox",
        "Downloads": 772705,
        "dats": 1,
        "Score": score5
    },
    {
        "": 5,
        "status": "operating",
        "Subgenres": "Story Action",
        "Break-even Day": 27.33,
        "Retention Day-1": 45,
        "Retention Day-7": 30,
        "Retention Day-14": 28,
        "Retention Day-30": 25,
        "Success Rate": 81.5,
        "Average Retention Rate": 32,
        "Genres": "Action",
        "Downloads": 33066,
        "dats": 1,
        "Score": score6
    },
    {
        "": 6,
        "status": "operating",
        "Subgenres": "Grand Strategy",
        "Break-even Day": 27.83,
        "Retention Day-1": 65,
        "Retention Day-7": 48,
        "Retention Day-14": 44,
        "Retention Day-30": 40,
        "Success Rate": 84.2,
        "Average Retention Rate": 49.25,
        "Genres": "Strategy",
        "Downloads": 343675,
        "dats": 1,
        "Score": score7
    },
    {
        "": 7,
        "status": "operating",
        "Subgenres": "RPG",
        "Break-even Day": 27.37,
        "Retention Day-1": 80,
        "Retention Day-7": 61,
        "Retention Day-14": 56,
        "Retention Day-30": 54,
        "Success Rate": 76.1,
        "Average Retention Rate": 62.75,
        "Genres": "RPG",
        "Downloads": 206712,
        "dats": 1,
        "Score": score8
    },
    {
        "": 8,
        "status": "operating",
        "Subgenres": "MMO RPG",
        "Break-even Day": 27.37,
        "Retention Day-1": 80,
        "Retention Day-7": 61,
        "Retention Day-14": 56,
        "Retention Day-30": 54,
        "Success Rate": 79.8,
        "Average Retention Rate": 62.75,
        "Genres": "RPG",
        "Downloads": 808210,
        "dats": 1,
        "Score": score9
    },
    {
        "": 9,
        "status": "operating",
        "Subgenres": "Football Sports",
        "Break-even Day": 27.28,
        "Retention Day-1": 69,
        "Retention Day-7": 56,
        "Retention Day-14": 50,
        "Retention Day-30": 42,
        "Success Rate": 81,
        "Average Retention Rate": 54.25,
        "Genres": "Sports",
        "Downloads": 229941,
        "dats": 1,
        "Score": score10
    },
    {
        "": 10,
        "status": "operating",
        "Subgenres": "Chess Puzzle",
        "Break-even Day": 25.8,
        "Retention Day-1": 85,
        "Retention Day-7": 67,
        "Retention Day-14": 62,
        "Retention Day-30": 54,
        "Success Rate": 75.6,
        "Average Retention Rate": 67,
        "Genres": "Puzzle",
        "Downloads": 533271,
        "dats": 1,
        "Score": score11
    }
  ]
  let breakEvenPoint = 33 - 27 //break even day 30  * 10 * slidervalue 
  let retentionRateValue = 12 //retday-30 * rrvalue
  let successRateValue =  10 //successrate * ss 
  
  
   
   


  const parse = (val) => val.replace(/^\$/, "");

  const [showResult, setResult] = React.useState(false);

  const [sliderValue, setSliderValue] = React.useState(50);
  const [rrValue, setRrValue] = React.useState(50);
  const [ssValue, setSsValue] = React.useState(50);




  const [genre, setGenre] = React.useState("exampleGenre");
 
  const [maxscoreGame, maxScore] = React.useState(1);
  
  const predict = async  () => {



    
    
    setScore1(((parseFloat( estData[0]["Break-even Day"]))  * sliderValue) + (parseFloat(estData[0]["Average Retention Rate"]) * rrValue) + (parseFloat(estData[0]["Success Rate"]) * ssValue))
    setScore2(((parseFloat( estData[1]["Break-even Day"]))  * sliderValue) + (parseFloat(estData[1]["Average Retention Rate"]) * rrValue) + (parseFloat(estData[1]["Success Rate"]) * ssValue))
    setScore3(((parseFloat( estData[2]["Break-even Day"]))  * sliderValue) + (parseFloat(estData[2]["Average Retention Rate"]) * rrValue) + (parseFloat(estData[2]["Success Rate"]) * ssValue))
    setScore4(((parseFloat( estData[3]["Break-even Day"]))  * sliderValue) + (parseFloat(estData[3]["Average Retention Rate"]) * rrValue) + (parseFloat(estData[3]["Success Rate"]) * ssValue))
    setScore5(((parseFloat( estData[4]["Break-even Day"]))  * sliderValue) + (parseFloat(estData[4]["Average Retention Rate"]) * rrValue) + (parseFloat(estData[4]["Success Rate"]) * ssValue))
    setScore6(((parseFloat( estData[5]["Break-even Day"]))  * sliderValue) + (parseFloat(estData[5]["Average Retention Rate"]) * rrValue) + (parseFloat(estData[5]["Success Rate"]) * ssValue))
    setScore7(((parseFloat( estData[6]["Break-even Day"]))  * sliderValue) + (parseFloat(estData[6]["Average Retention Rate"]) * rrValue) + (parseFloat(estData[6]["Success Rate"]) * ssValue))
    setScore8(((parseFloat( estData[7]["Break-even Day"]))  * sliderValue) + (parseFloat(estData[7]["Average Retention Rate"]) * rrValue) + (parseFloat(estData[7]["Success Rate"]) * ssValue))
    setScore9(((parseFloat( estData[8]["Break-even Day"]))  * sliderValue) + (parseFloat(estData[8]["Average Retention Rate"]) * rrValue) + (parseFloat(estData[8]["Success Rate"]) * ssValue))
    setScore10(((parseFloat( estData[9]["Break-even Day"]))  * sliderValue) + (parseFloat(estData[9]["Average Retention Rate"]) * rrValue) + (parseFloat(estData[9]["Success Rate"]) * ssValue))
    setScore11(((parseFloat( estData[10]["Break-even Day"]))  * sliderValue) + (parseFloat(estData[10]["Average Retention Rate"]) * rrValue) + (parseFloat(estData[10]["Success Rate"]) * ssValue))

   /* for(let i=0; i<estData.length; i++) {
      let newScore = ((parseFloat( estData[i]["Break-even Day"]) - 33) * (-10) * sliderValue) + (parseFloat(estData[i]["Average Retention Rate"]) * rrValue) + (parseFloat(estData[i]["Success Rate"]) * ssValue)
      scoreArray[i] = newScore
      console.log(newScore)
      console.log('scorearray',scoreArray[i])
    }*/

    estData.map(game => {
        game.Score = ((parseFloat( game["Break-even Day"]) - 33) * (-10) * sliderValue) + (parseFloat(game["Average Retention Rate"]) * rrValue) + (parseFloat(game["Success Rate"]) * ssValue);

     })


  }  
 

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  const data1 = [...estData].sort((a, b) => (a.Score < b.Score ? 1 : -1));

  const handleResult = () => {
    predict();
    if (!showResult) setResult(true);
    console.log("okey");
  };

  return (
    <Box>
      <Container>
        <Text fontSize='3xl' mt={100}>Choose Importance of Those...</Text>
        <Box height={50} />
        <FormControl id="email">
          <Box pt={4} pb={2}>
            <FormLabel mb={10}>Break-Even Point</FormLabel>
            <Slider
              aria-label="slider-ex-6"
              onChange={(val) => setSliderValue(val)}
            >
              <SliderMark value={25} {...labelStyles}>
                25%
              </SliderMark>
              <SliderMark value={50} {...labelStyles}>
                50%
              </SliderMark>
              <SliderMark value={75} {...labelStyles}>
                75%
              </SliderMark>
              <SliderMark
                value={sliderValue}
                textAlign="center"
                bg="blue.500"
                color="white"
                mt="-10"
                ml="-5"
                w="12"
              >
                {sliderValue}%
              </SliderMark>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>
          <Box pt={6} pb={2}>
            <FormLabel mb={10}>Retention Rate</FormLabel>
            <Slider
              aria-label="slider-ex-6"
              onChange={(val) => setRrValue(val)}
            >
              <SliderMark value={25} {...labelStyles}>
                25%
              </SliderMark>
              <SliderMark value={50} {...labelStyles}>
                50%
              </SliderMark>
              <SliderMark value={75} {...labelStyles}>
                75%
              </SliderMark>
              <SliderMark
                value={rrValue}
                textAlign="center"
                bg="blue.500"
                color="white"
                mt="-10"
                ml="-5"
                w="12"
              >
                {rrValue}%
              </SliderMark>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>
          <Box pt={6} pb={2}>
            <FormLabel mb={10}>Success Rate</FormLabel>
            <Slider
              aria-label="slider-ex-6"
              onChange={(val) => setSsValue(val)}
            >
              <SliderMark value={25} {...labelStyles}>
                25%
              </SliderMark>
              <SliderMark value={50} {...labelStyles}>
                50%
              </SliderMark>
              <SliderMark value={75} {...labelStyles}>
                75%
              </SliderMark>
              <SliderMark
                value={ssValue}
                textAlign="center"
                bg="blue.500"
                color="white"
                mt="-10"
                ml="-5"
                w="12"
              >
                {ssValue}%
              </SliderMark>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>
          <Flex justifyContent={"center"}>
          <Button
          
          onClick={handleResult}
          mb={5}
          mt={50}
          colorScheme="blue"
          variant="solid"
        >
          Make Prediction
        </Button>
          </Flex>
          
        </FormControl>
      </Container>
      {showResult && (
        <Flex justifyContent={"center"}>
        <table>
            <tbody>
                <tr>
                    <th>Order</th>&nbsp;&nbsp;&nbsp;
                    <th>Subgenre Name</th>&nbsp;&nbsp;&nbsp;
                    <th>Break-even Point</th>&nbsp;&nbsp;&nbsp;
                    <th>Average Retention Rate</th>&nbsp;&nbsp;&nbsp;
                    <th>Success Rate</th>&nbsp;&nbsp;&nbsp;
                    <th>Score</th>
                </tr>
                {data1.map((val, key) => {
                    return(
                    <tr key={key}>
                        <td>{key+1}</td>&nbsp;
                        <td>{val.Subgenres}</td>&nbsp;
                        <td>&nbsp;&nbsp;&nbsp;{val["Break-even Day"]}</td>&nbsp;
                        <td>&nbsp;&nbsp;&nbsp;{val["Average Retention Rate"]}</td>&nbsp;
                        <td>&nbsp;&nbsp;&nbsp;{val["Success Rate"]}</td>&nbsp;
                        <td>&nbsp;&nbsp;&nbsp;{parseInt(val["Score"])}</td>&nbsp;
                    </tr>)
                } )}
            </tbody>
            
            
            </table>

        </Flex>
      )}
    </Box>
  );
}
