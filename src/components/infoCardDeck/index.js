import react from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Icon from "../utils/Icon";
import "./infoCardDeck.scss";

export default function InfoCardDeck({ weatherData, closeHandler }) {
  return (
    <div className="infoCardDeck">
      {weatherData.map((data) => {
        if (!data) return null;
        const { name, condition, temp, country, icon, unit, id } = data;
        return (
          <Card key={id} className="infoCard">
            <Card.Body>
              <Card.Text>
                <Button
                  variant="link"
                  className="closeButton"
                  size="sm"
                  onClick={() => closeHandler(id)}
                >
                  <Icon icon="window-close" size="fa-lg" title="close" />
                </Button>
                <p>
                  <span>{name}</span>
                  <sup>{country}</sup>
                </p>
                <p className="temperature">
                  <span>{temp}</span>
                  <sup className="unit">{unit === "metric" ? "°C" : "°F"}</sup>
                </p>
                <img
                  src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt=""
                />
                <p>{condition}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
