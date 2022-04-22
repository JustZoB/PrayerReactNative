import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { useSelector } from "react-redux";

import colors from '../../utils/colors'
import { RootState } from "../../store/store";
import { getComment } from "../../store/comments/selectors";
import { getDateString } from "../../utils/dates";
import { Anna } from "../../assets/images/profiles";

interface CommentsProps {
  id: number,
}

export const Comment: React.FC<CommentsProps> = ({ id }) => {
  const currentComment = useSelector((state: RootState) => getComment(state.commentsSlice, id));
  const date = getDateString(currentComment.created)

  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.profileImage}
        source={Anna}
      />
      <View style={styles.profileContainer}>
        <View style={styles.userContainer}>
          <Text style={styles.userName}>{currentComment.userId}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>

        <Text style={styles.bodyText}>{currentComment.body}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    borderColor: colors.gray,
    borderStyle: 'solid',
    borderTopWidth: 1,
    padding: 15,
    flexDirection: 'row',
    width: '100%',
  },
  profileContainer: {
    flexDirection: 'column',
    paddingHorizontal: 15,
  },
  userContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginBottom: 5,
  },
  userName: {
    fontSize: 17,
    lineHeight: 20,
    color: colors.black,
    marginRight: 5,
  },
  date: {
    fontSize: 13,
    lineHeight: 16,
    color: colors.darkGray,
  },
  bodyText: {
    fontSize: 13,
    lineHeight: 16,
    color: colors.black,
  },
  profileImage: {
    borderRadius: 100,
  },
})
