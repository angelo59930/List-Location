import React from "react";
import {
  Text,
  FlatList,
  StyleSheet,
  View,
  Button,
  Dimensions,
} from "react-native";

export default ({ puntos, closeModal }) => {
  return (
    <>
      <View style={styles.list}>
        <FlatList
          data={puntos.map((x) => x.name)}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item}</Text>
            </View>
          )}
          keyExtractor={(item) => String(item)}
        />
      </View>
      <View style={styles.button}>
        <Button title="cerrar" onPress={closeModal} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
  },
  item: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    height: 50,
    justifyContent: "center",
    padding: 10,
  },
  list: {
    height: Dimensions.get("window").height - 250,
  },
});
