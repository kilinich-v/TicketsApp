import { StyleSheet } from 'react-native';

import { palette } from '../../utils/styles';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 7,
    color: '#000',
    backgroundColor: palette.borderColor
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    textTransform: 'uppercase'
  }
});

export default styles;
