import React, { useState } from 'react'
import { Field, Form } from 'react-final-form';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { DeskStackParams } from '../navigators/DeskStackNavigator';
import { prayerValidate } from '../utils/validate';
import { ColumnRouteType } from '../services/navigationProps';
import { RootState } from '../store/store';
import { addPrayerStart, getPrayersStart } from '../store/prayers/actions';
import { getPrayersByColumnId, getPrayersChecked, getPrayersUnChecked } from '../store/prayers/selectors';
import { Add } from '../assets/svg';
import { PrayerButton } from '../components/PrayerButton';
import { TextField } from '../components/TextField';
import { RoundButton } from '../components/RoundButton';
import { ErrorMessage } from '../components/ErrorMessage';
import { TextFieldError } from '../components/TextFieldError';
import colors from '../utils/colors';

interface ColumnProps {
  route: ColumnRouteType;
}

export const MyPrayers: React.FC<ColumnProps> = ({ route }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<DeskStackParams>>();
  const prayers = useSelector((state: RootState) => state.prayersSlice);
  const [answeredButton, setAnsweredButton] = useState<string>('Show answered prayers')
  const [isAnsweredPrayersShown, setIsAnsweredPrayersShown] = useState<boolean>(false)
  const thisPrayers = useSelector((state: RootState) => getPrayersByColumnId(state.prayersSlice, route.params.id));
  const checkedPrayers = useSelector(() => getPrayersChecked(thisPrayers));
  const unCheckedPrayers = useSelector(() => getPrayersUnChecked(thisPrayers));

  const onAddPrayer = (values: { title: string }) => {
    dispatch(addPrayerStart({
      title: values.title,
      columnId: route.params.id
    }))
  }

  const hidePrayers = () => {
    if (!isAnsweredPrayersShown) {
      setAnsweredButton('Hide answered prayers')
      setIsAnsweredPrayersShown(true)
    } else {
      setAnsweredButton('Show answered prayers')
      setIsAnsweredPrayersShown(false)
    }
  }

  React.useEffect(() => {
    dispatch(getPrayersStart())
  }, [])

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <Form
          onSubmit={onAddPrayer}
          validate={prayerValidate}
          render={({ handleSubmit, submitting, form }) => (
            <>
              <Field
                name='title'
                render={({ input, meta }) => (
                  <View>
                    <TextField
                      value={input.value}
                      paddingLeft={48}
                      placeholder='Add a prayer...'
                      onTextChange={input.onChange}
                    />
                    {meta.touched && meta.error && <TextFieldError text={meta.error} />}
                  </View>
                )}
              />

              <Add
                style={styles.commentIcon}
                disabled={submitting}
                onPress={() => {
                  handleSubmit()
                  form.reset()
                }}
              />
              {prayers.error &&
                <ErrorMessage text={prayers.error.message} />
              }
            </>
          )}
        />
      </View>


      <View>
        {unCheckedPrayers &&
          <>
            {unCheckedPrayers.map(({ id }) => (
              <PrayerButton
                key={id}
                id={id}
                onPress={() => {
                  navigation.navigate('Prayer', { id })
                }}
              />
            ))}
          </>
        }
        <RoundButton
          title={answeredButton}
          onPress={hidePrayers}
        />
        {isAnsweredPrayersShown && checkedPrayers &&
          <>
            {checkedPrayers.map(({ id }) => (
              <PrayerButton
                key={id}
                id={id}
                textDecoration={'line-through'}
                onPress={() => {
                  navigation.navigate('Prayer', { id })
                }}
              />
            ))}
          </>
        }
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'scroll',
    width: '100%',
    backgroundColor: colors.white,
  },
  formContainer: {
    padding: 15,
  },
  commentIcon: {
    position: 'absolute',
    top: 28,
    left: 28,
  },
});
