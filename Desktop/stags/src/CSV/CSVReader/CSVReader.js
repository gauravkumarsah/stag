import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import PlayersDataCSV from './mlb_players.csv';

const CSVReader = () => {
  const [playersData, setPlayersData] = useState(null);
  const [processedPlayersData, setProcessedPlayersData] = useState([]);

  const config = {
    delimiter: '', // auto-detect
    newline: '', // auto-detect
    quoteChar: '"',
    escapeChar: '"',
    header: false,
    transformHeader: undefined,
    dynamicTyping: false,
    preview: 0,
    encoding: '',
    worker: false,
    comments: false,
    step: undefined,
    complete: undefined,
    error: undefined,
    download: false,
    downloadRequestHeaders: undefined,
    downloadRequestBody: undefined,
    skipEmptyLines: false,
    chunk: undefined,
    chunkSize: undefined,
    fastMode: undefined,
    beforeFirstChunk: undefined,
    withCredentials: undefined,
    transform: undefined,
    delimitersToGuess: [',', '\t', '|', ';', Papa.RECORD_SEP, Papa.UNIT_SEP],
  };
  useEffect(() => {
    Papa.parse(PlayersDataCSV, {
      download: true,
      delimiter: '', // auto-detect
      newline: '', // auto-detect
      quoteChar: '"',
      escapeChar: '"',
      header: false,
      transformHeader: undefined,
      dynamicTyping: false,
      preview: 0,
      encoding: '',
      worker: false,
      comments: false,
      step: undefined,
      error: undefined,
      downloadRequestHeaders: undefined,
      downloadRequestBody: undefined,
      skipEmptyLines: false,
      chunk: undefined,
      chunkSize: undefined,
      fastMode: undefined,
      beforeFirstChunk: undefined,
      withCredentials: undefined,
      transform: undefined,
      delimitersToGuess: [',', '\t', '|', ';', Papa.RECORD_SEP, Papa.UNIT_SEP],
      complete: function (results) {
        setPlayersData(results.data);
      },
    });
  }, []);

  const processCSV = (playersData) => {
    setProcessedPlayersData(
      playersData.map((player) => {
        return { name: player[0], stl: player[1] };
      })
    );
  };
  if (playersData?.length > 1) processCSV(playersData);

  console.log('ll', processedPlayersData[9]);
  return <div></div>;
};

export default CSVReader;
