import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image,Text } from "react-native";

import { COLORS, SIZES, SHADOWS, assets, FONTS } from "../constants";
import { SubInfo, Genere, Title } from "./SubInfo";
import { RectButton, CircleButton } from "./Button";

const Card = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 250,
        }}
      >
        <Image
          source={{uri: data.thumbnail}}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />

        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>

      <SubInfo item={data.platform}/>

      <View style={{ width: "100%", padding: SIZES.font }}>
        <Title
          title={data.title}
          subTitle={data.publisher}
          titleSize={SIZES.large}
          subTitleSize={SIZES.font}
        />
        <Text style={{
          fontFamily: FONTS.thin,
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}>{data.short_description}</Text>

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Genere genre={data.genre} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>
      </View>
    </View>
  );
};

export default Card;