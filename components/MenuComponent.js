import React from "react";
import { FlatList } from "react-native";
import { Tile } from "react-native-elements";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import { Loading } from "./LoadingComponent";

class Menu extends React.Component {
  static navigationOptions = {
    title: "Menu"
  };

  renderMenuItem = ({ item }) => {
    return (
      <Tile
        key={item.id}
        title={item.name}
        caption={item.description}
        featured
        onPress={() =>
          this.props.navigation.navigate("DishDetail", { dish: item })
        }
        imageSrc={{ uri: baseUrl + item.image }}
      />
    );
  };

  render() {
    if (this.props.dishes.isLoading) {
      return <Loading />;
    } else if (this.props.dishes.errMess) {
      return (
        <View>
          <Text>{props.dishes.errMess}</Text>
        </View>
      );
    } else {
      return (
        <FlatList
          data={this.props.dishes.dishes}
          renderItem={this.renderMenuItem}
          keyExtractor={item => item.id.toString()}
        />
      );
    }
  }
}

const mapStateToProps = state => ({
  dishes: state.dishes
});

export default connect(mapStateToProps)(Menu);
