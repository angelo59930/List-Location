import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";

export default ({ longPress, puntos, pointsFilter }) => {
  return (
    <MapView style={styles.map} onLongPress={longPress}>
      {pointsFilter &&
        puntos.map((x) => (
          <Marker coordinate={x.coordinate} title={x.name} key={x.name} />
        ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 70,
  },
});
