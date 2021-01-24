import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getWeatherDetails } from "../../modules/utils";
import "./searchBar.scss";

export default function SearchBar({ updateWeatherInfo }) {
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState("metric");
  const [errorMsg, setErrorMsg] = useState("");

  const updateValue = (event) => {
    setValue(event.target.value);
  };

  const getWeatherInfo = async () => {
    setValue("");
    setErrorMsg("");
    if (!value) return;
    const { data, error } = await getWeatherDetails(value, unit);
    if (!error) {
      const {
        name,
        id,
        weather,
        main: { temp },
        sys: { country },
      } = data;
      updateWeatherInfo({
        name,
        id,
        condition: weather[0].description,
        icon: weather[0].icon,
        temp,
        country,
        unit,
      });
    } else if (error.response.status === 404) setErrorMsg("City no found.");
    else setErrorMsg("Something went wrong!");
  };

  return (
    <>
      <InputGroup className="mb-3 searchBar">
        <FormControl
          placeholder="City name or Zip code"
          aria-label="City name or Zip code"
          aria-describedby="basic-addon2"
          value={value}
          onChange={updateValue}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={getWeatherInfo}>
            Get Weather
          </Button>
        </InputGroup.Append>
      </InputGroup>
      <div className="mb-3 radioContainer">
        <Form.Check
          inline
          label="Metric"
          type="radio"
          id="inline-radio-1"
          checked={unit === "metric"}
          onChange={() => setUnit("metric")}
        />
        <Form.Check
          inline
          label="Imperical"
          type="radio"
          id="inline-radio-2"
          checked={unit === "imperical"}
          onChange={() => setUnit("imperical")}
        />
      </div>
      <Alert
        className="alertMsg"
        show={!!errorMsg}
        variant="danger"
        dismissible
        onClose={() => setErrorMsg("")}
      >
        {errorMsg}
      </Alert>
    </>
  );
}
