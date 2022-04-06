import { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableHighlight
} from 'react-native';
// import DatePicker from 'react-native-date-picker';

import TextInputCustom from '../../components/TextInputCustom';
import ButtonCustom from '../../components/ButtonCustom';

import { resourceService, ticketsService } from '../../utils/services';

const TicketsSearchScreen = () => {
  const [date, setDate] = useState(new Date());
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [cityFrom, setCityFrom] = useState('');
  const [cityTo, setCityTo] = useState('');

  useEffect(async () => {
    const res = await resourceService.getCities();

    console.log('res', res);
  }, []);

  const handleSearch = async () => {
    if (cityFrom && cityTo) {
      const res = await ticketsService.getTickets({
        origin: cityFrom,
        destination: cityTo
      });

      if (res?.prices) {
        console.log(res?.prices);
      } else {
        console.log(res?.error);
      }
    }
  };

  return (
    <SafeAreaView>
      <View style={{ width: '90%', marginRight: 'auto', marginLeft: 'auto' }}>
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
          open={openDatePicker}
          date={date}
          onConfirm={date => {
            setOpenDatePicker(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpenDatePicker(false);
          }}
        /> */}
        <ButtonCustom handlePress={handleSearch} />
      </View>
    </SafeAreaView>
  );
};

export default TicketsSearchScreen;
