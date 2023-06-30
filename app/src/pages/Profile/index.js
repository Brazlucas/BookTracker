import * as React from "react";
import {
  Box,
  View,
  Image,
  Text,
  Stack,
  Center,
  Spacer,
  Button,
  Modal,
  ScrollView,
  VStack,
  initialRef,
  finalRef,
  FormControl,
  Input,
  HStack,
} from "native-base";

export default function Profile() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [size, setSize] = React.useState("md");

  const handleSizeClick = newSize => {
    setSize(newSize);
    setModalVisible(!modalVisible);
  };

  return (
    <Center px="3">
      <Center w="100%">
        <>
          <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
            <Modal.Content>
              <Modal.CloseButton />
              <Modal.Header>Alterar Usuário</Modal.Header>
              <Modal.Body>
                <FormControl>
                  <FormControl.Label>Nome</FormControl.Label>
                  <Input ref={initialRef} />
                </FormControl>
                <FormControl mt="3">
                  <FormControl.Label>Email</FormControl.Label>
                  <Input />
                </FormControl>
                <FormControl mt="3">
                  <FormControl.Label>Senha</FormControl.Label>
                  <Input />
                </FormControl>
              </Modal.Body>
              <Modal.Footer>
                <Button.Group space={2}>
                  <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                    setModalVisible(false);
                  }}>
                    Cancel
                  </Button>
                  <Button onPress={() => {
                    setModalVisible(false);
                  }}>
                    Save
                  </Button>
                </Button.Group>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </>;
        <View marginTop={10}>
          <Box style={{ display: 'flex' }} height={150} width={150}>
            <Image
              rounded="lg"
              height="100%"
              width="100%"
              resizeMode="stretch"
              src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7914927/man-icon-md.png"
            />
          </Box>
          <Text style={{ color: "#000" }}>Nome: Lucas Matheus</Text>
          <Text style={{ color: "#000" }}>Email: apresentacao@email.com</Text>
          <Text style={{ color: "#000" }}>Membro desde: 26/05/2023</Text>
          <Center>
            <HStack space="4" justifyContent="center" alignItems="center">
              <Button onPress={() => {
                setModalVisible(!modalVisible);
              }}>
                Editar usuário
              </Button>
            </HStack>
          </Center>
        </View>
      </Center>
    </Center>
  );
};