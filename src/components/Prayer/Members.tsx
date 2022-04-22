import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

import colors from '../../utils/colors'
import { CirclePlus } from "../../assets/svg";
import { Gloria, Hanna } from "../../assets/images/profiles";

export const Members: React.FC = () => {
  return (
    <View>
      <Text style={styles.title}>Members</Text>
      <View style={styles.membersContainer}>
        <Image
          style={styles.profileImage}
          source={Gloria}
        />
        <Image
          style={styles.profileImage}
          source={Hanna}
        />
        <CirclePlus />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    padding: 15,
    fontSize: 13,
    lineHeight: 16,
    textTransform: 'uppercase',
    color: colors.lightBlue,
  },
  membersContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  profileImage: {
    borderRadius: 100,
    marginRight: 5,
  },
})
