import React, { useState } from 'react'
import { Field, Form } from 'react-final-form';
import { StyleSheet, View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';

import { DeskStackParams } from '../navigators/DeskStackNavigator';
import { prayerValidate } from '../utils/validate';
import colors from '../utils/colors';
import AppRoutes from '../utils/routes';
import { RootState } from '../store/store';
import { addPrayerStart, getPrayersStart } from '../store/prayers/actions';
import { getPrayersByColumnId, getPrayersChecked, getPrayersUnChecked } from '../store/prayers/selectors';
import { Add } from '../assets/svg';
import { PrayerButton } from '../components/PrayerButton';
import { TextField } from '../components/TextField';
import { RoundButton } from '../components/RoundButton';
import { ErrorMessage } from '../components/ErrorMessage';
import { TextFieldError } from '../components/TextFieldError';
import { ColumnTabParams } from '../navigators/ColumnTabNavigator';

type MyPrayersNavigationProps = {
  navigation: MaterialTopTabNavigationProp<ColumnTabParams, AppRoutes.MyPrayers>;
  route: RouteProp<ColumnTabParams, AppRoutes.MyPrayers>;
}

export const MyPrayers: React.FC<MyPrayersNavigationProps> = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const stackNavigation = useNavigation<NativeStackNavigationProp<DeskStackParams>>();
  const prayers = useSelector((state: RootState) => state.prayersSlice);
  const [isAnsweredPrayersShown, setIsAnsweredPrayersShown] = useState<boolean>(false)
  const currentPrayers = useSelector((state: RootState) => getPrayersByColumnId(state.prayersSlice, route.params.id));
  const checkedPrayers = useSelector(() => getPrayersChecked(currentPrayers));
  const unCheckedPrayers = useSelector(() => getPrayersUnChecked(currentPrayers));
  const TITLE_FIELD = 'title';

  const onAddPrayer = (values: { title: string }, form) => {
    form.reset()
    dispatch(addPrayerStart({
      title: values.title,
      columnId: route.params.id
    }))
  }

  const togglePrayers = () => {
    !isAnsweredPrayersShown
      ? setIsAnsweredPrayersShown(true)
      : setIsAnsweredPrayersShown(false)
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
                name={TITLE_FIELD}
                render={({ input, meta }) => (
                  <View>
                    <TextField
                      value={input.value}
                      stylesProps={{ paddingLeft: 48 }}
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
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={unCheckedPrayers}
          renderItem={({ item }) => (
            <PrayerButton
              id={item.id}
              onPress={() => {
                stackNavigation.navigate(AppRoutes.Prayer, { id: item.id })
              }}
            />
          )}
        />
        <RoundButton
          title={isAnsweredPrayersShown ? 'Hide answered prayers' : 'Show answered prayers'}
          onPress={togglePrayers}
        />
        {isAnsweredPrayersShown &&
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={checkedPrayers}
            renderItem={({ item }) => (
              <PrayerButton
                id={item.id}
                stylesProps={{ textDecorationLine: 'line-through' }}
                onPress={() => {
                  stackNavigation.navigate(AppRoutes.Prayer, { id: item.id })
                }}
              />
            )}
          />
        }
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: '100%',
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
