import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { Field, Form } from 'react-final-form';
import { StyleSheet, SafeAreaView, View, Text, ScrollView, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Message } from '../assets/svg';
import { Button } from '../components/Button';
import { Comments } from '../components/Prayer/Comments';
import { CountBlocks } from '../components/Prayer/CountBlocks';
import { LastPrayed } from '../components/Prayer/LastPrayed';
import { Members } from '../components/Prayer/Members';
import { Title } from '../components/Prayer/Title';
import { TextField } from '../components/TextField';
import { DeskStackParams } from '../navigators/DeskStackNavigator';
import { PrayerRouteType } from '../services/navigationProps';
import { addCommentStart } from '../store/comments/actions';
import { RootState } from '../store/store';
import colors from '../utils/colors';
import { commentValidate } from '../utils/validate';
import { Pray } from '../assets/svg'

interface PrayerProps {
  route: PrayerRouteType;
}

export const Prayer: React.FC<PrayerProps> = ({ route }) => {
  const navigation = useNavigation<NativeStackNavigationProp<DeskStackParams>>();
  const comments = useSelector((state: RootState) => state.commentsSlice);
  const dispatch = useDispatch();

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
                    {meta.touched && meta.error && <Text style={styles.textFieldError}>{meta.error}</Text>}
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
  commentIcon: {
    marginTop: -48,
    marginLeft: 15,
  },
  blank: {
    height: 20,
  }
});
