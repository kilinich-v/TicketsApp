import { StyleSheet } from 'react-native';

import { palette } from '../../utils/styles';

const styles = StyleSheet.create({
  fieldWrapper: {
    margin: 20
  },
  title: {
    marginBottom: 5,
    fontSize: 15,
    color: palette.textMainColor
  },
  field: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    color: palette.textMainColor,
    borderColor: palette.borderColor
  },
  fieldPlaceholder: {
    color: palette.textPlaceholderColor
  }
});

export default styles;
