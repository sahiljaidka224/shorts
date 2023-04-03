import { Post, Post as PostType } from "../../components";

import { Dimensions, FlatList } from "react-native";

import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../../graphql/queries";
import { useEffect, useState } from "react";

export const Home = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await API.graphql<any>(graphqlOperation(listPosts));
        setPosts(response.data.listPosts.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  console.log({ posts });

  return (
    <>
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
    </>
  );
};
