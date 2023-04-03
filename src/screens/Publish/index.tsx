import { useNavigation, useRoute } from "@react-navigation/native";
import { API, Auth, graphqlOperation, Storage } from "aws-amplify";
import { useEffect, useState } from "react";
import styled from "styled-components/native";
import * as Random from "expo-random";
import { createPost } from "../../graphql/mutations";

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
`;

const TextInput = styled.TextInput`
  min-height: 60px;
  width: 100%
  border: 2px solid lightgrey;
  margin: 0 auto;
  border-radius: 5px;
  background-color: white;
  font-size: 16px;
  padding: 10px
`;

const PublishButton = styled.TouchableOpacity`
  margin-top: 40px;
  border: 1px solid grey;
  padding: 15px;
  border-radius: 10px;
  background-color: white;
`;

const Text = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

export const Publish = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [description, setDescription] = useState<string>("");
  const [videoKey, setVideoKey] = useState<string | null>(null);

  const uploadToStorage = async (imagePath: string) => {
    try {
      const response = await fetch(imagePath);
      const blob = await response.blob();

      const filename = `${Random.getRandomBytes(10)}.mp4`;
      const s3Response = await Storage.put(filename, blob);

      setVideoKey(s3Response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (route.params && route.params.videoUri) {
      uploadToStorage(route.params.videoUri);
    }
  });

  const onPublish = async () => {
    try {
      if (!videoKey) return;

      const userInfo = await Auth.currentAuthenticatedUser();

      const newPost = {
        videoUri: videoKey,
        description: description,
        userPostsId: userInfo.attributes.sub,
      };
      const response = await API.graphql(
        graphqlOperation(createPost, { input: newPost })
      );

      navigation.navigate("Base", { screen: "Home" });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <TextInput
        numberOfLines={5}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <PublishButton onPress={onPublish}>
        <Text>Publish</Text>
      </PublishButton>
    </Container>
  );
};
