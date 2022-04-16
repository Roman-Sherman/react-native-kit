import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { COLORS, FONTFAMILY, hobbies, images, SHADOW } from "../constants";

import { FocusedStatusBar } from "../utils";

const HobbyCard = ({ name, iconUrl }) => (
  <TouchableOpacity
    activeOpacity={0.5}
    style={{
      width: 120,
      margin: 10,
      borderRadius: 18,
      marginBottom: 20,
      backgroundColor: COLORS.white,
      ...SHADOW.darkShadow,
      shadowColor: COLORS.lightBlue,
    }}
  >
    <View
      style={{
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        minHeight: 120,
        width: "100%",
        padding: 15,
        borderRadius: 18,
        backgroundColor: COLORS.white,
      }}
    >
      <Image
        source={iconUrl}
        resizeMode="contain"
        style={{
          width: 30,
          height: 30,
        }}
      />
      <Text
        style={{
          fontFamily: FONTFAMILY.semiBold,
          fontSize: 18,
          color: COLORS.darkBlue,
          lineHeight: 20,
        }}
        numberOfLines={1}
      >
        {name}
      </Text>
    </View>
  </TouchableOpacity>
);

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.blueWhite }}>
      <FocusedStatusBar backgroundColor="#fff" barStyle="dark-content" />
      <ScrollView>
        <View
          style={{
            backgroundColor: COLORS.blueWhite,
          }}
        >
          <View
            style={{
              padding: 20,
              backgroundColor: COLORS.white,
            }}
          >
            <TouchableOpacity>
              <Image
                source={images.menu}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: COLORS.darkBlue,
                }}
              />
            </TouchableOpacity>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginVertical: 15,
              }}
            >
              <Text
                style={{
                  fontFamily: FONTFAMILY.bold,
                  fontSize: 32,
                  color: COLORS.darkBlue,
                }}
              >
                Home
              </Text>
              <Image
                source={images.kemal}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                }}
              />
            </View>

            <FlatList
              data={hobbies}
              renderItem={({ item }) => <HobbyCard {...item} />}
              keyExtractor={(item) => item.id}
              horizontal
              contentContainerStyle={{ marginTop: 10 }}
            />
          </View>

          <View
            style={{
              backgroundColor: COLORS.blueWhite,
              padding: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: FONTFAMILY.bold,
                  fontSize: 23,
                  color: COLORS.darkBlue,
                  flex: 1,
                }}
              >
                Booked Classes
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontFamily: FONTFAMILY.medium,
                    fontSize: 15,
                    color: COLORS.mediumBlue,
                  }}
                >
                  See all
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 20 }}>
              <View
                style={{
                  width: 250,
                  padding: 12,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                  backgroundColor: COLORS.white,
                }}
              >
                <Image
                  source={images.teacher01}
                  resizeMode="cover"
                  style={{
                    width: "100%",
                    height: 210,
                    borderRadius: 20,
                  }}
                />

                <View
                  style={{
                    width: "100%",
                    justifyContent: "flex-start",
                    paddingTop: 20,
                    paddingHorizontal: 10,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: FONTFAMILY.bold,
                      color: COLORS.darkBlue,
                      lineHeight: 22,
                      fontSize: 20,
                    }}
                  >
                    Robert Downey
                  </Text>
                  <Text
                    style={{
                      fontFamily: FONTFAMILY.semiBold,
                      color: COLORS.gray,
                      lineHeight: 17,
                      fontSize: 15,
                      marginTop: 5,
                    }}
                  >
                    Chess class
                  </Text>

                  <View
                    style={{
                      flexDirection: "row",
                      paddingTop: 10,
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: FONTFAMILY.semiBold,
                        color: COLORS.gray,
                        fontSize: 12,
                      }}
                    >
                      21 April 22
                    </Text>
                    <View
                      style={{
                        marginHorizontal: 10,
                        width: 4,
                        height: 4,
                        backgroundColor: COLORS.gray,
                        borderRadius: 8,
                      }}
                    />
                    <Text
                      style={{
                        fontFamily: FONTFAMILY.semiBold,
                        color: COLORS.gray,
                        fontSize: 12,
                      }}
                    >
                      10:00 AM
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
