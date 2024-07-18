import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Dropdown from "./components/Dropdown";
import InputField from "./components/InputField";
import Button from "./components/Button";
import DisplayData from "./components/DisplayData";
import ErrorMessage from "./components/ErrorMessage";
import './App.css';

const App = () => {
  const resources = ['people', 'planets', 'starships', 'vehicles'];
  const [selectedResource, setSelectedResource] = useState(resources[0]);
  const [id, setId] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const handleFetchData = async () => {
    try {
      const response = await axios.get(`https://swapi.dev/api/${selectedResource}/${id}/`);
      setData(response.data);
      setError(false);
    } catch (err) {
      setData(null);
      setError(true);
    }
  };

  const fetchPersonById = async (id) => {
    try {
      const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
      setData(response.data);
      setError(false);
    } catch (err) {
      setData(null);
      setError(true);
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route exact path="/">
          <h1>Luke APIwalker</h1>
          <Dropdown resources={resources} selectedResource={selectedResource} onChange={(e) => setSelectedResource(e.target.value)} />
          <InputField value={id} onChange={(e) => setId(e.target.value)} />
          <Button onClick={handleFetchData} />
          {error ? <ErrorMessage /> : data && <DisplayData data={data} />}
        </Route>
        <Route path="/:id" render={({ match }) => {
          fetchPersonById(match.params.id);
          return error ? <ErrorMessage /> : data && <DisplayData data={data} />;
        }} />
      </Routes>
    </div>
  );
};

export default App;