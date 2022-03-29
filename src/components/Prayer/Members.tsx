import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { CirclePlus } from "../../assets/svg";
import colors from '../../utils/colors'

export const Members: React.FC = () => {
  return (
    <View>
      <Text style={styles.title}>Members</Text>
      <View style={styles.membersContainer}>
        <Image
          style={styles.profileImage}
          source={require('../../assets/images/profiles/Gloria.png')}
        />
        <Image
          style={styles.profileImage}
          source={require('../../assets/images/profiles/Hanna.png')}
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
