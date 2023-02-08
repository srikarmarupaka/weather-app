import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { SearchBar, ButtonGroup } from "@rneui/themed";
import { useState } from "react";
import WeatherApp from "./components/WeatherApp";
import LoadingIndicator from "./components/loadingIndicator";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WeatherAPP</Text>
      <LoadingIndicator />
      {/* <WeatherApp /> */}
      {/* <SearchBar
        searchIcon
        round
        onChangeText={(e) => setSearchText(e)}
        containerStyle={styles.searchBar}
      ></SearchBar> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "10%",
    backgroundColor: "#000",
    alignItems: "center",
    height: "100%",
    // justifyContent: "center",
  },
  title: {
    color: "red",
    fontWeight: "bold",
    fontSize: 36,
  },
  searchBar: {
    height: 60,
    width: "100%",
    // margin: 12,
    borderWidth: 1,
    padding: 5,
  },
  searchButton: {
    width: "50%",
  },
});
