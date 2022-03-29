import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { useSelector } from "react-redux";
import { getCommentBody, getCommentDate, getCommentUser, getDateString } from "../../store/comments/selectors";
import { RootState } from "../../store/store";
import colors from '../../utils/colors'

interface CommentsProps {
  key: number,
  id: number,
}

export const Comment: React.FC<CommentsProps> = ({ id }) => {
  const body = useSelector((state: RootState) => getCommentBody(state.commentsSlice, id));
  const userId = useSelector((state: RootState) => getCommentUser(state.commentsSlice, id));
  const created = useSelector((state: RootState) => getCommentDate(state.commentsSlice, id));
  const date = getDateString(created)

  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.profileImage}
        source={require('../../assets/images/profiles/Anna.png')}
      />
      <View style={styles.profileContainer}>
        <View style={styles.userContainer}>
          <Text style={styles.userName}>{userId}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>

        <Text style={styles.bodyText}>{body}</Text>
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
