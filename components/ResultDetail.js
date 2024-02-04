import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function ResultDetail({ result }) {
  return (
    <View>
      <Image
        style={{ width: 250, height: 120 }}
        source={
          result.image_url ? { uri: result.image_url } : null // require("../../assets/placeholder.png")
        }
      />
      <Text>{result.name}</Text>
      <Text>
        {result.rating} Yıldızlı Restorant, {result.review_count} Değerlendirme
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
