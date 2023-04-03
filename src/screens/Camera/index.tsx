import { useNavigation } from "@react-navigation/native";
import { Camera as ExpoCamera, CameraType } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledCamera = styled(ExpoCamera)`
  flex: 1;
`;

const RecordButton = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: #ff4343;
  justify-content: center;
  align-items: center;
`;

const StopButton = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  border-radius: 3px;
  background-color: #ff4343;
  justify-content: center;
  align-items: center;
`;

export const Camera = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [permission, requestPermission] = ExpoCamera.useCameraPermissions();
  const navigation = useNavigation();

  const cameraRef = useRef<ExpoCamera | null>(null);

  useEffect(() => {
    if (!permission?.granted) {
      requestPermission();
    }
  }, [permission]);

  console.log({ permission });

  // if (!permission?.granted) return null;

  const onRecord = async () => {
    if (!cameraRef) return;

    if (!isRecording) {
      setIsRecording(true);

      const data = await cameraRef.current?.recordAsync({ maxDuration: 10 });
      console.log({ data });
      navigation.navigate("Publish", { videoUri: data?.uri });
      return;
    }

    if (isRecording) {
      setIsRecording(false);
      cameraRef.current?.stopRecording();
    }
  };

  return (
    <Container>
      <StyledCamera ref={cameraRef} type={CameraType.back} />
      {isRecording ? (
        <StopButton onPress={onRecord} />
      ) : (
        <RecordButton onPress={onRecord} />
      )}
    </Container>
  );
};
