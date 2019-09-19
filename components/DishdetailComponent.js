import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";

class DishDetail extends React.Component {
  static navigationOptions = {
    title: "Dish details"
  };

  render() {
    return <RenderDish dish={this.props.navigation.state.params.dish} />;
  }
}

const RenderDish = props => {
  if (props.dish != null) {
    return (
      <Card
        featuredTitle={props.dish.name}
        image={require(`./images/uthappizza.png`)}
      >
        <Text style={{ margin: 10 }}>{props.dish.description}</Text>
      </Card>
    );
  } else {
    return <View></View>;
  }
};

export default DishDetail;
