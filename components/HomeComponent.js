import React, { Component } from "react";
import { ScrollView, Text } from "react-native";
import { DISHES } from "../shared/dishes";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { Card } from "react-native-elements";

const RenderItem = ({ item }) => (
  <Card
    featuredTitle={item.name}
    featuredSubtitle={item.designation}
    image={require("./images/uthappizza.png")}
  >
    <Text style={{ margin: 10 }}>{item.description}</Text>
  </Card>
);

class Home extends Component {
  state = {
    dishes: DISHES,
    promotions: PROMOTIONS,
    leaders: LEADERS
  };

  static navigationOptions = {
    title: "Home"
  };

  render() {
    return (
      <ScrollView>
        <RenderItem item={this.state.dishes.filter(dish => dish.featured)[0]} />
        <RenderItem
          item={
            this.state.promotions.filter(promotion => promotion.featured)[0]
          }
        />
        <RenderItem
          item={this.state.leaders.filter(leader => leader.featured)[0]}
        />
      </ScrollView>
    );
  }
}

export default Home;
