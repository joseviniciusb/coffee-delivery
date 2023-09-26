import {
  HeaderContainer,
  LocationContainer,
  ShoppingCartIconContainer,
} from "./styles";

import Logo from "../../assets/Logo.svg";
import Location from "../../assets/Location.svg";
import shoppingCart from "../../assets/shoppingCart.svg";
import { useAppContext } from "../../contexts/ProductsContext";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const { shoppingCartItems } = useAppContext();
  const [city, setCity] = useState("");
  const [stateAbbreviation, setStateAbbreviation] = useState("");

  const arrayTotalItems = shoppingCartItems.map((coffee) => coffee.count);
  const initialValue = 0;

  const totalItemsInCart = arrayTotalItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  const stateAbbreviations = {
    Acre: "AC",
    Alagoas: "AL",
    Amapá: "AP",
    Amazonas: "AM",
    Bahia: "BA",
    Ceará: "CE",
    DistritoFederal: "DF",
    EspíritoSanto: "ES",
    Goiás: "GO",
    Maranhão: "MA",
    MatoGrosso: "MT",
    MatoGrossoDoSul: "MS",
    MinasGerais: "MG",
    Pará: "PA",
    Paraíba: "PB",
    Paraná: "PR",
    Pernambuco: "PE",
    Piauí: "PI",
    RioDeJaneiro: "RJ",
    RioGrandeDoNorte: "RN",
    RioGrandeDoSul: "RS",
    Rondônia: "RO",
    Roraima: "RR",
    SantaCatarina: "SC",
    SãoPaulo: "SP",
    Sergipe: "SE",
    Tocantins: "TO",
  };

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      getCityInfo(position.coords.latitude, position.coords.longitude);
    });
  } else {
    console.log("Not Available");
  }

  function getCityInfo(latitude, longitude) {
    var geocodingUrl = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

    fetch(geocodingUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.address) {
          var city = data.address.city;
          var state = data.address.state;

          var stateAbbreviation = stateAbbreviations[state] || state;

          setCity(city);
          setStateAbbreviation(stateAbbreviation);
        } else {
          console.log("City not found");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} />{" "}
      </NavLink>

      <nav>
        <LocationContainer>
          <img src={Location}></img>
          <span>
            {city}, {stateAbbreviation}
          </span>
        </LocationContainer>
        <ShoppingCartIconContainer>
          <NavLink to="/checkout">
            <img src={shoppingCart}></img>
            <div>
              <span>{totalItemsInCart}</span>
            </div>
          </NavLink>
        </ShoppingCartIconContainer>
      </nav>
    </HeaderContainer>
  );
};
