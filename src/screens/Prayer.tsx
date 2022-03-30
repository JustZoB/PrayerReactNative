import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { Field, Form } from 'react-final-form';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { DeskStackParams } from '../navigators/DeskStackNavigator';
import { commentValidate } from '../utils/validate';
import { PrayerRouteType } from '../services/navigationProps';
import { RootState } from '../store/store';
import { addCommentStart } from '../store/comments/actions';
import { Pray, Message } from '../assets/svg'
import { Comments } from '../components/Prayer/Comments';
import { CountBlocks } from '../components/Prayer/CountBlocks';
import { LastPrayed } from '../components/Prayer/LastPrayed';
import { Members } from '../components/Prayer/Members';
import { Title } from '../components/Prayer/Title';
import { TextField } from '../components/TextField';
import { ErrorMessage } from '../components/ErrorMessage';
import { TextFieldError } from '../components/TextFieldError';

interface PrayerProps {
  route: PrayerRouteType;
}

export const Prayer: React.FC<PrayerProps> = ({ route }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<DeskStackParams>>();
  const comments = useSelector((state: RootState) => state.commentsSlice);

  const onAddComment = (values: { body: string }) => {
    dispatch(addCommentStart({
      body: values.body,
      prayerId: route.params.id
    }))
  }

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pray />
      )
    })
  }, [navigation])

  return (
    <ScrollView style={styles.container}>
      <View>
        <Title id={route.params.id} />
        <LastPrayed />
        <CountBlocks />
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
                      paddingLeft={48}
                      borderRadius={0}
                      value={input.value}
                      placeholder='Add a comment...'
                      onTextChange={input.onChange}
                    />
                    {meta.touched && meta.error && <TextFieldError text={meta.error} />}
                  </View>
                )}
              />

              <Message
                style={styles.commentIcon}
                disabled={submitting}
                onPress={() => {
                  handleSubmit()
                  form.reset()
                }}
              />
              {comments.error &&
                <ErrorMessage text={comments.error.message} />
              }
            </>
          )}
        />
        <View style={styles.blank} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 15,
  },
  commentIcon: {
    marginTop: -48,
    marginLeft: 15,
  },
  blank: {
    height: 20,
  }
});
