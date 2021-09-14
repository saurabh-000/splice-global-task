import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
  Pressable,
  Linking,
  ActivityIndicator,
} from 'react-native';
import {metrics} from '../theme/metrics';
import {color} from '../theme/colors';
import NoDataView from '../components/NoDataView';
import Spinner from '../components/Spinner';
import SearchView from '../components/SearchView';
import SearchButtonView from '../components/SearchButtonView';
import ItemView from '../components/ItemView';
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        searchInput: '',
      },
      output: {
        data: [],
      },
      showActivityIndicator: false,
      noResultFound: false,
      isFirst: true,
    };
  }

  onGo = () => {
    let state = this.state.input;
    this.getData(state);
  };

  goToLink = url => {
    console.log('url', url);
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  changeText = value => {
    this.setState({
      input: {
        searchInput: value,
      },
    });
  };

  getData = input => {
    console.log('input', input.searchInput);
    this.setState({
      showActivityIndicator: true,
    });
    fetch(
      `https://google-search3.p.rapidapi.com/api/v1/search/q=${input.searchInput}&num=100`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-rapidapi-key':
            '30a79d49e4msh60149164f98a8a5p16accdjsn3726a274f766',
          'x-rapidapi-host': 'google-search3.p.rapidapi.com',
          useQueryString: 'true',
        },
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        //console.log(responseJson.results);
        this.setState({
          isFirst: false,
          output: {
            data: [],
          },
        });
        if (responseJson.results.length === 0) {
          this.setState({
            noResultFound: true,
          });
        } else {
          this.setState({
            output: {
              data: responseJson.results,
            },
            noResultFound: false,
          });
        }

        this.setState({
          showActivityIndicator: false,
        });
        console.log('output', this.state.output);
        console.log('output', this.state.noResultFound);
      })
      .catch(error => {
        console.error(error);
      });
  };
  render() {
    const renderItem = ({item}) => {
      return <ItemView item={item} onPress={() => this.goToLink(item.link)} />;
    };

    return (
      <View style={styles.rootContainer}>
        <View style={styles.searchContainer}>
          <SearchView
            value={this.state.searchInput}
            onChangeText={value => this.changeText(value)}
          />
          <SearchButtonView onPress={this.onGo} />
        </View>
        <View style={styles.listContainer}>
          {this.state.showActivityIndicator ? (
            <Spinner />
          ) : this.state.output.data.length === 0 ? (
            this.state.isFirst ? (
              <NoDataView text={'Search Something'} />
            ) : (
              <NoDataView text={'No Result Found'} />
            )
          ) : (
            <FlatList data={this.state.output.data} renderItem={renderItem} />
          )}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: metrics.One,
    padding: metrics.Fifteen,
  },
  searchContainer: {
    flex: metrics.One,
    flexDirection: 'row',
    marginBottom: metrics.Ten,
  },

  listContainer: {
    flex: metrics.Nine,
  },
});
export default HomeScreen;
