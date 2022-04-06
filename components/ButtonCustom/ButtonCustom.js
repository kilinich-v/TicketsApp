import { TouchableHighlight, View, Text } from 'react-native';

import styles from './styles';

const ButtonCustom = ({ handlePress, underlayColor = '#fff' }) => {
  return (
    <TouchableHighlight onPress={handlePress} underlayColor={underlayColor}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Search tickets</Text>
      </View>
    </TouchableHighlight>
  );
};

export default ButtonCustom;
