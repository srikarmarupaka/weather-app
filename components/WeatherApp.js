import { View, Text, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { OPENWEATHERAPIENDPOINT, OPENWEATHERKEY } from "../constants";
import { Button } from "react-native-elements";
import LoadingIndicator from "./loadingIndicator";

export default function WeatherApp() {
  const [refreshing, setRefreshing] = useState(null);
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");

  const getWeather = async (location) => {
    const response = await fetch(
      `${OPENWEATHERAPIENDPOINT}&lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${OPENWEATHERKEY}`
    );
    if (response.status !== 200) {
      setError(response.status);
      return;
    }
    const data = await response.json();
    setWeather(data);
    setError(null);
  };

  useEffect(() => {
    loadForecast();
  }, []);

  const loadForecast = async () => {
    setRefreshing(true);

    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setError("Permission to access location was denied");
      return;
    }

    const location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    setLocation(location);
    getWeather(location);
    setRefreshing(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  useEffect(() => {
    if (error) {
      Alert.alert(error);
    }
  }, [error]);

  if (refreshing || !location || !weather) {
    return <LoadingIndicator />;
  }

  return (
    <View>
      <Text style={{ backgroundColor: "#fff" }}>WeatherAPP</Text>
      {/* code for searchBar and searchButton */}
      {/* <SearchBar
        placeholder="Search for a city"
        darkTheme
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      ></SearchBar>
      <Button title="Search" onPress={() => console.log("Srikar")}></Button> */}
    </View>
  );
}
