import React, { useState } from 'react'
import { Field, Form } from 'react-final-form';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppLoader } from '../components/AppLoader';
import { Button } from '../components/Button';
import { PrayerButton } from '../components/PrayerButton';
import { TextField } from '../components/TextField';
import { ColumnRouteType } from '../services/navigationProps';
import { addPrayerStart, getPrayersStart } from '../store/prayers/actions';
import { getPrayersByColumnId, getPrayersChecked, getPrayersUnChecked } from '../store/prayers/selectors';
import { RootState } from '../store/store';
import { prayerValidate } from '../utils/validate';
import colors from '../utils/colors'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DeskStackParams } from '../navigators/DeskStackNavigator';
import { Add } from '../assets/svg';
import { RoundButton } from '../components/RoundButton';

interface ColumnProps {
  route: ColumnRouteType;
}

export const MyPrayers: React.FC<ColumnProps> = ({ route }) => {
  const navigation = useNavigation<NativeStackNavigationProp<DeskStackParams>>();
  const dispatch = useDispatch();
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
                    {meta.touched && meta.error && <Text style={styles.textFieldError}>{meta.error}</Text>}
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
                <>
                  {prayers.error.name === "EntityNotFound"
                    ? <Text style={styles.errorMessage}>Server error: No such user exists</Text>
                    : <Text style={styles.errorMessage}>Server error: {prayers.error.message}</Text>
                  }
                </>
              }
            </>
          )}
        />
      </View>


      <View>
        {/* {prayers.isDataLoaded &&
          <AppLoader />
        } ? {
          <>
          </>
        } */}
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
  },
  formContainer: {
    padding: 15,
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
    position: 'absolute',
    top: 28,
    left: 28,
  },
});
