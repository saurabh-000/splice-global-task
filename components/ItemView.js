import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  Pressable,
} from 'react-native';
import React from 'react';
import {metrics} from '../theme/metrics';
import {color} from '../theme/colors';
class ItemView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.item}>
        <View>
          <Text style={styles.title}>{this.props.item.title}</Text>
        </View>

        <View>
          <Pressable onPress={this.props.onPress} style={styles.button}>
            <View style={styles.linkContainer}>
              <Text style={styles.linkText}>{this.props.item.link}</Text>
            </View>
          </Pressable>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    padding: metrics.Ten,
    marginVertical: metrics.Eight,
    borderRadius: metrics.Five,
    borderColor: color.primaryAppColor,
    borderWidth: metrics.One,
    flexDirection: 'column',
  },
  title: {
    fontWeight: 'bold',
  },
  linkContainer: {
    paddingBottom: metrics.Five,
    paddingTop: metrics.Five,
  },
  linkText: {
    color: '#0645AD',
  },
});
export default ItemView;
