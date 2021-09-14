import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';
import {metrics} from '../theme/metrics';
import {color} from '../theme/colors';
class Spinner extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.noDataView}>
        <ActivityIndicator size="large" color={color.primaryAppColor} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  noDataView: {
    flex: metrics.One,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Spinner;
