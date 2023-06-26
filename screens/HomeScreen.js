import React, { useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";

import { Card, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS,  GameData } from "../constants";

const HomeScreen = () => {
  const [gameData, setGameData] = useState(GameData);


  const handleSearch = (value) => {
    if (value.length === 0) {
      setGameData(GameData);
    }else{
        const filteredData = gameData.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );

      if (filteredData.length === 0) {
        setGameData(GameData);
      } else {
        setGameData(filteredData);
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={gameData}
            renderItem={({ item }) => <Card data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View
            style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;