import React from 'react'
import { Field, Form } from 'react-final-form';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../components/Button';
import { Comments } from '../components/Prayer/Comments';
import { CountBlocks } from '../components/Prayer/CountBlocks';
import { LastPrayed } from '../components/Prayer/LastPrayed';
import { Members } from '../components/Prayer/Members';
import { Title } from '../components/Prayer/Title';
import { TextField } from '../components/TextField';
import { PrayerRouteType } from '../services/navigationProps';
import { addCommentStart } from '../store/comments/actions';
import { RootState } from '../store/store';
import colors from '../utils/colors';
import { commentValidate } from '../utils/validate';

interface PrayerProps {
  route: PrayerRouteType;
}

export const Prayer: React.FC<PrayerProps> = ({ route }) => {
  const comments = useSelector((state: RootState) => state.commentsSlice);
  const dispatch = useDispatch();

  const onAddComment = (values: { body: string }) => {
    dispatch(addCommentStart({
      body: values.body,
      prayerId: route.params.id
    }))
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Title id={route.params.id} />
        <LastPrayed />
        {/* <CountBlocks /> */}
        <Members />
        <Comments id={route.params.id} />
        <Form
          onSubmit={onAddComment}
          validate={commentValidate}
          render={({ handleSubmit, submitting, form }) => (
            <>
              <Field
                name='body'
                render={({ input, meta }) => (
                  <View style={styles.inputContainer}>
                    <TextField
                      value={input.value}
                      placeholder='Add a comment...'
                      onTextChange={input.onChange}
                    />
                    {meta.touched && meta.error && <Text style={styles.textFieldError}>{meta.error}</Text>}
                  </View>
                )}
              />

              <Button
                title='Add comment'
                disabled={submitting}
                onPress={() => {
                  handleSubmit()
                  form.reset()
                }}
              />
              {comments.error &&
                <>
                  {comments.error.name === "EntityNotFound"
                    ? <Text style={styles.errorMessage}>Server error: No such user exists</Text>
                    : <Text style={styles.errorMessage}>Server error: {comments.error.message}</Text>
                  }
                </>
              }
            </>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  inputContainer: {
    marginBottom: 15,
  },
  errorMessage: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.red,
    marginTop: 10,
  },
  textFieldError: {
    position: 'absolute',
    top: 13,
    right: 10,
    fontSize: 16,
    color: colors.red,
  },
});
