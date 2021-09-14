import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import React from 'react';
import {metrics} from '../theme/metrics';
import {color} from '../theme/colors';
class SearchView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.searchInputTextcontainer}>
        <TextInput
          value={this.props.value}
          style={styles.searchInputText}
          onChangeText={this.props.onChangeText}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  searchInputTextcontainer: {
    flex: metrics.Eight,
  },
  searchInputText: {
    backgroundColor: color.secondaryAppColor,
    padding: metrics.Ten,
    marginTop: metrics.Ten,
    marginBottom: metrics.Ten,
    height: metrics.Fourty,
  },
});
export default SearchView;
