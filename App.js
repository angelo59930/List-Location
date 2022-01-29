import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import { Map, Modal, Panel, Input, List } from "./components";

export default function App() {
  const [puntos, setPuntos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [puntosTemp, setPuntosTemp] = useState({});
  const [visibility, setVisibility] = useState(false);
  const [pointsFilter, setpointsFilter] = useState(false);
  const [visibilityFilter, setVisibilityFilter] = useState("nuevo_punto");

  const togglePointsFilter = () => {
    setpointsFilter(!pointsFilter);
  };

  const handLongPress = ({ nativeEvent }) => {
    setVisibilityFilter("nuevo_punto");
    setPuntosTemp(nativeEvent.coordinate);
    setVisibility(true);
  };

  const handleChangeText = (text) => {
    setNombre(text);
  };

  const handleSubmit = () => {
    const newPunto = { coordinate: puntosTemp, name: nombre };
    setPuntos(puntos.concat(newPunto));
    clearState();
  };

  const clearState = () => {
    setVisibility(false);
    setNombre("");
  };

  const handleLista = () => {
    setVisibilityFilter("todos_puntos");
    setVisibility(true);
  };

  return (
    <View style={styles.container}>
      <Map
        longPress={handLongPress}
        puntos={puntos}
        pointsFilter={pointsFilter}
      />
      <Panel
        onPressLeft={handleLista}
        textLeft="Lista"
        togglePointsFilter={togglePointsFilter}
      />
      <Modal visibility={visibility}>
        {visibilityFilter === "nuevo_punto" ? (
          <View style={styles.form}>
            <Input
              title="Nombre"
              placeholder="Nombre del punto"
              onChangeText={handleChangeText}
            />
            <Button title="Aceptar" onPress={handleSubmit} />
            <Button title="Cancelar" onPress={clearState} />
          </View>
        ) : (
          <List
            puntos={puntos}
            closeModal={() => {
              setVisibility(false);
            }}
          />
        )}
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 15,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
