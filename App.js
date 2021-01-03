import { StatusBar } from "expo-status-bar";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

// import image
import logo from "./assets/logo.png";

export default function App() {
  const [data, setData] = useState([]);

  // ambil data ketika screen dibuka
  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  // ambil data dari api
  const getData = () => {
    console.log("mengambil data");
    axios("https://ipapi.co/8.8.8.8/json").then((data) => {
      setData(data.data);
    });
  };

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Text style={styles.title}>IP Check</Text>
        <StatusBar style="auto" />
        <View style={styles.ipUser}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.userLabel}>Your Ip :</Text>
          <Text style={styles.userResult}>{data.ip}</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>IP :</Text>
            <Text style={styles.result}>{data.ip}</Text>
            <Text style={styles.label}>Version :</Text>
            <Text style={styles.result}>{data.version}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>City :</Text>
            <Text style={styles.result}>{data.city}</Text>
            <Text style={styles.label}>Country :</Text>
            <Text style={styles.result}>{data.country}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={getData} style={styles.button}>
          <Text style={styles.textBtn}>Refresh</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#171717",
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    marginTop: 24,
    color: "#F74F2B",
  },
  ipUser: {
    marginHorizontal: "auto",
    margintop: 500,
    color: "#000000",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  userLabel: {
    fontSize: 20,
    color: "#F0453C",
    opacity: 0.6,
  },
  userResult: {
    fontSize: 25,
    color: "#F0453C",
  },
  label: {
    marginBottom: 16,
    fontWeight: "bold",
    opacity: 0.5,
    color: "#F74F2B",
  },
  result: {
    marginBottom: 16,
    fontWeight: "bold",
    color: "#F74F2B",
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#F74F2B",
    width: "auto",
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 24,
    marginTop: 24,
  },
  textBtn: {
    fontWeight: "bold",
  },
});
