import { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button
} from 'react-native';
// import DatePicker from 'react-native-date-picker';

import TextInputCustom from '../../components/TextInputCustom';

import { resourceService } from '../../utils/services';

const TicketsSearchScreen = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [cityFrom, setCityFrom] = useState('');
  const [cityTo, setCityTo] = useState('');

  useEffect(async () => {
    const res = await resourceService.getCities();

    console.log('res', res);
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>Search</Text>
        <TextInputCustom
          placeholder={'From'}
          query={cityFrom}
          setQuery={setCityFrom}
        />
        <TextInputCustom
          placeholder={'To'}
          query={cityTo}
          setQuery={setCityTo}
        />

        {/* <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default TicketsSearchScreen;
