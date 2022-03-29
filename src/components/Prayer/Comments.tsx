import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsStart } from "../../store/comments/actions";
import { getCommentBody, getCommentsByPrayerId } from "../../store/comments/selectors";
import { RootState } from "../../store/store";
import colors from '../../utils/colors'
import { Comment } from './Comment'

interface CommentsProps {
  id: number;
}

export const Comments: React.FC<CommentsProps> = ({ id }) => {
  const dispatch = useDispatch();
  const thisComments = useSelector((state: RootState) => getCommentsByPrayerId(state.commentsSlice, id));

  React.useEffect(() => {
    dispatch(getCommentsStart())
  }, [])

  return (
    <View>
      <Text style={styles.title}>Comments</Text>
      {thisComments &&
        <>
          {thisComments.map(({ id }) => (
            <Comment
              key={id}
              id={id}
            />
          ))}
        </>
      }
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
  }
})
