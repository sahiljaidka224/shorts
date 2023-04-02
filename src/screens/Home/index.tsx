import { Post } from "../../components";

import posts from "../../../data/posts";
import { Dimensions, FlatList, SafeAreaView } from "react-native";

export const Home = () => {
  return (
    <SafeAreaView>
      <FlatList
        style={{ flexGrow: 0 }}
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get("window").height - 70}
        snapToAlignment="start"
        decelerationRate="fast"
      />
    </SafeAreaView>
  );
};
