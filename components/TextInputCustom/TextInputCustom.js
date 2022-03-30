import { View, Text, TextInput } from 'react-native';

import styles from './styles';

const TextInputCustom = ({ title, placeholder, query, setQuery, password }) => {
  return (
    <View style={styles.fieldWrapper}>
      {title && <Text style={styles.title}>{title}</Text>}
      <TextInput
        style={styles.field}
        placeholder={placeholder}
        value={query}
        onChangeText={setQuery}
        secureTextEntry={password}
        placeholderTextColor={styles.fieldPlaceholder.color}
      />
    </View>
  );
};

export default TextInputCustom;
