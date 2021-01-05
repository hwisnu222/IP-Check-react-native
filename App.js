import { StatusBar } from "expo-status-bar";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { APP_API_KEY } from "@env";

// import image
import logo from "./assets/logo.png";

export default function App() {
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  const urlApi = `http://api.ipstack.com/check?access_key=${APP_API_KEY}&format=1`;

  // ambil data ketika screen dibuka
  useEffect(() => {
    getData();
  }, []);

  // ambil data dari api
  const getData = () => {
    console.log("mengambil data");

    axios(urlApi)
      .then((data) => {
        setData(data.data);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
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
          <Text style={styles.userResult}>
            {error ? "Koneksi lambat" : data.ip}
          </Text>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Country Code :</Text>
            <Text style={styles.result}>{data.country_code}</Text>
            <Text style={styles.label}>Type :</Text>
            <Text style={styles.result}>{data.type}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>City :</Text>
            <Text style={styles.result}>{data.city}</Text>
            <Text style={styles.label}>Country :</Text>
            <Text style={styles.result}>{data.country_name}</Text>
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
    marginBottom: 8,
    fontWeight: "bold",
    opacity: 0.5,
    color: "#F74F2B",
  },
  result: {
    marginBottom: 24,
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
