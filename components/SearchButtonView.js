import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {metrics} from '../theme/metrics';
import {color} from '../theme/colors';
class SearchButtonView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.searchButtonContainer}>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={this.props.onPress}>
          <Text style={styles.searchButtonText}>Go</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  searchButtonContainer: {
    flex: metrics.Two,
    marginTop: metrics.Ten,
    marginBottom: metrics.Ten,
  },
  searchButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.primaryAppColor,
    height: metrics.Fourty,
  },
  searchButtonText: {
    color: color.white,
  },
});
export default SearchButtonView;
