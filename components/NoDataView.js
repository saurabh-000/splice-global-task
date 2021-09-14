import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import {metrics} from '../theme/metrics';
class NoDataView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.noDataView}>
        <Text style={styles.title}>{this.props.text}</Text>
      </View>
    );
  }
}
const styles = {
  title: {
    fontWeight: 'bold',
  },
  noDataView: {
    flex: metrics.One,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
export default NoDataView;
