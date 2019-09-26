import React from "react";
import { Text, View, ScrollView, FlatList } from "react-native";
import { Card, Icon } from "react-native-elements";
import { connect } from "react-redux";
import { postFavorite } from "../redux/ActionCreators";

class DishDetail extends React.Component {
  markFavorite(dishId) {
    this.props.postFavorite(dishId);
  }

  static navigationOptions = {
    title: "Dish details"
  };

  render() {
    const dish = this.props.navigation.state.params.dish;
    const comments = this.props.comments.comments.filter(
      comment => comment.dishId === dish.id
    );
    return (
      <ScrollView>
        <RenderDish
          dish={dish}
          favorite={this.props.favorites.some(el => el === dish.id)}
          onPress={() => this.markFavorite(dish.id)}
        />
        <RenderComments comments={comments} />
      </ScrollView>
    );
  }
}

const RenderComments = props => {
  const handleRender = ({ item }) => (
    <View key={item.id} style={{ margin: 10 }}>
      <Text style={{ fontSize: 14 }}>{item.comment}</Text>
      <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
      <Text style={{ fontSize: 12 }}>
        {"-- " + item.author + ", " + item.date}{" "}
      </Text>
    </View>
  );
  return (
    <Card title="Comments">
      <FlatList
        data={props.comments}
        renderItem={handleRender}
        keyExtractor={item => item.id.toString()}
      />
    </Card>
  );
};

const RenderDish = props => {
  if (props.dish != null) {
    return (
      <Card
        featuredTitle={props.dish.name}
        image={require(`./images/uthappizza.png`)}
      >
        <Text style={{ margin: 10 }}>{props.dish.description}</Text>
        <Icon
          raised
          reverse
          name={props.favorite ? "heart" : "heart-o"}
          type="font-awesome"
          color="#f50"
          onPress={() =>
            props.favorite ? console.log("Already favorite") : props.onPress()
          }
        />
      </Card>
    );
  } else {
    return <View></View>;
  }
};

const mapStateToProps = state => ({
  comments: state.comments,
  favorites: state.favorites
});

const mapDispatchToProps = dispatch => ({
  postFavorite: dishId => dispatch(postFavorite(dishId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DishDetail);
