import { StatusBar } from "expo-status-bar";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [data, setData] = useState([]);
  const [ip, setIp] = useState({ ip: "", version: "", city: "" });

  // ambil data ketika screen dibuka
  useEffect(() => {
    console.log("mengambil data");
    axios("https://ipapi.co/8.8.8.8/json").then((data) => {
      setData(data);
    });
  }, []);
  console.log(data);

  // ambil data didalam state hasil request api
  const getData = () => {
    // masukan kedalam state dalam bentuk object
    setIp({
      ip: data.data.ip,
      version: data.data.version,
      city: data.data.city,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>IP Check</Text>
      <StatusBar style="auto" />
      <View style={styles.ipUser}>
        <Text>Your Ip :</Text>
        <Text>{ip.ip}</Text>
      </View>

      <View style={styles.background}>
        <Text style={styles.label}>IP :{ip.ip}</Text>
        <Text style={styles.label}>Version :{ip.version}</Text>
        <Text style={styles.label}>City : {ip.city}</Text>
        <TouchableOpacity onPress={getData} style={styles.button}>
          <Text style={styles.textBtn}>View</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    marginTop: 24,
  },
  ipUser: {
    marginHorizontal: "auto",
    margintop: 500,
    color: "#000000",
  },
  label: {
    marginBottom: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#49d13d",
    width: "auto",
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  textBtn: {
    fontWeight: "bold",
  },
  background: {
    marginTop: "auto",
    paddingTop: 25,
    paddingHorizontal: 10,
    backgroundColor: "#f8f8f8",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
