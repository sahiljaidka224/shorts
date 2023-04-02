import { Ionicons } from "@expo/vector-icons";
import { ResizeMode, Video } from "expo-av";
import { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  height: ${Dimensions.get("window").height - 70}px;
`;

const VideoContainer = styled(Video)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const BottomViewContainer = styled.View`
  height: ${Dimensions.get("window").height - 70}px;
  justify-content: flex-end;
`;

const RightContainer = styled.View`
  align-self: flex-end;
  justify-content: space-between;
  margin-right: 10px;
`;

const ProfilePictureContainer = styled.View`
  margin-bottom: 5px;
`;

const ProfileImage = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 17.5px;
  border-color: #fff;
  border-width: 2px;
`;

const IconContainer = styled.TouchableOpacity`
  margin-top: 18px;
  align-items: center;
`;

const IconText = styled.Text`
  color: #fff;
  font-size: 10px;
  margin-top: 2px;
`;

const BottomContainer = styled.View`
  padding: 10px;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 20px;
`;

const BottomLeftContainer = styled.View``;

const BottomRightContainer = styled.View`
  justify-content: flex-end;
`;

const MusicImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-color: #fff;
`;

export interface Post {
  id: string;
  videoUri: string;
  liked: boolean;
  user: {
    id: string;
    name: string;
    handle: string;
    profileThumb: string;
  };
  description: string;
  song: {
    id: string;
    name: string;
    uri: string;
  };
  likesCount: number;
  comments: number;
  shares: number;
}

export const Post: React.FC<{ post: Post }> = ({ post }) => {
  const [postState, setPost] = useState<Post>(post);
  const [paused, setPaused] = useState<boolean>(false);

  const {
    id,
    user,
    videoUri,
    description,
    song,
    likesCount,
    comments,
    shares,
    liked,
  } = postState;

  const onPlayPause = () => {
    setPaused(!paused);
  };

  const onHeartPress = () => {
    setPost({
      ...postState,
      liked: !liked,
      likesCount: liked ? likesCount - 1 : likesCount + 1,
    });
  };

  return (
    <Container>
      <TouchableWithoutFeedback onPress={onPlayPause}>
        <View>
          <VideoContainer
            source={{
              uri:
                videoUri ??
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            }}
            resizeMode={ResizeMode.COVER}
            shouldPlay={!paused}
            isLooping
          />
          <BottomViewContainer>
            <RightContainer>
              <ProfilePictureContainer>
                <ProfileImage
                  source={{
                    uri:
                      user.profileThumb ??
                      "https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964_1280.jpg",
                  }}
                />
              </ProfilePictureContainer>
              <IconContainer onPress={onHeartPress}>
                <Ionicons
                  name="heart"
                  size={24}
                  color={liked ? "red" : "white"}
                />
                <IconText>{likesCount}</IconText>
              </IconContainer>
              <IconContainer>
                <Ionicons name="chatbox-ellipses" size={24} color="white" />
                <IconText>{comments}</IconText>
              </IconContainer>
              <IconContainer>
                <Ionicons name="share" size={24} color="white" />
                <IconText>{shares}</IconText>
              </IconContainer>
            </RightContainer>

            <BottomContainer>
              <BottomLeftContainer>
                <Text style={styles.handle}>@{user.handle}</Text>
                <Text style={styles.description}>{description}</Text>
                <View style={styles.musicContainer}>
                  <Ionicons name="md-musical-note" size={20} color="white" />
                  <Text style={styles.songName}>{song.name}</Text>
                </View>
              </BottomLeftContainer>
              <BottomRightContainer>
                <MusicImage
                  source={{
                    uri:
                      song.uri ??
                      "https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964_1280.jpg",
                  }}
                />
              </BottomRightContainer>
            </BottomContainer>
          </BottomViewContainer>
        </View>
      </TouchableWithoutFeedback>
    </Container>
  );
};

const styles = StyleSheet.create({
  handle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  description: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "300",
    marginBottom: 5,
  },
  musicContainer: {
    flexDirection: "row",
  },
  songName: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 5,
  },
});
