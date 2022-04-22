import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import colors from '../../utils/colors'
import { RootState } from "../../store/store";
import { getCommentsStart } from "../../store/comments/actions";
import { getCommentsByPrayerId } from "../../store/comments/selectors";
import { Comment } from './Comment'
import { FlatList } from "react-native-gesture-handler";

interface CommentsProps {
  id: number;
}

export const Comments: React.FC<CommentsProps> = ({ id }) => {
  const dispatch = useDispatch();
  const currentComments = useSelector((state: RootState) => getCommentsByPrayerId(state.commentsSlice, id));

  React.useEffect(() => {
    dispatch(getCommentsStart())
  }, [])

  return (
    <>
      <Text style={styles.title}>Comments</Text>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={currentComments}
        renderItem={({ item }) => (
          <Comment id={item.id} />
        )}
      />
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    padding: 15,
    fontSize: 13,
    lineHeight: 16,
    textTransform: 'uppercase',
    color: colors.lightBlue,
  }
})
