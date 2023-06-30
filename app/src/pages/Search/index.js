import * as React from "react";
import {
  Box,
  Heading,
  VStack,
  Center,
  NativeBaseProvider,
  Input,
  Button,
  HStack,
  Text,
  Spinner,
} from "native-base";
import { useState } from "react";

export default function Search({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [loading, setLoading] = useState(false);

  function handleCadastroPress() {
    navigation.navigate("login");
  }

  function handleSearch() {
    // Lógica de pesquisa aqui
    console.log("Pesquisando por:", searchQuery);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Center w="100%">
          <Box safeArea p="2" py="8" w="90%" maxW="290">
            <Heading
              size="lg"
              color="indigo.600"
              _dark={{
                color: "warmGray.50",
              }}
              fontWeight="semibold"
            >
              Pesquise um livro:
            </Heading>
            <VStack space={3} mt="5">
              <Input
                placeholder="Digite sua pesquisa..."
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)}
              />
              <Button onPress={handleSearch} mt="2" colorScheme="indigo">
                {
                  loading ? <>
                    <HStack space={2} alignItems="center">
                      <Spinner accessibilityLabel="Loading posts" />
                      <Heading color="primary.200" fontSize="md">
                        <Text>Carregando</Text>
                      </Heading>
                    </HStack>
                  </> : <Text>Pesquisar</Text>
                }
              </Button>
            </VStack>
          </Box>
        </Center>
      </Center>
    </NativeBaseProvider>
  );
}