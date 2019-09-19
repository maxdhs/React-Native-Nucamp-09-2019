import React from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { DISHES } from "../shared/dishes";

class Menu extends React.Component {
  state = {
    dishes: DISHES
  };

  static navigationOptions = {
    title: "Menu"
  };

  renderMenuItem = ({ item }) => {
    return (
      <ListItem
        key={item.id}
        leftAvatar={{ source: require("./images/uthappizza.png") }}
        title={item.name}
        subtitle={item.description}
        onPress={() => {
          this.props.navigation.navigate("DishDetail", { dish: item });
        }}
      />
    );
  };

  render() {
    return (
      <FlatList
        data={this.state.dishes}
        renderItem={this.renderMenuItem}
        keyExtractor={dish => dish.id.toString()}
      />
    );
  }
}

export default Menu;
