import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { useQuery } from "react-query";
import { coins } from "../api";
import { ActivityIndicator, FlatList, View } from "react-native";
import { BLACK_COLOR } from "../colors";
import Coin from "../components/Coin";

const Home = () => {
  const { isLoading, data } = useQuery("coins", coins);
  const [cleanData, setCleanData] = useState([]);
  useEffect(() => {
    if (data) {
      setCleanData(
        data.filter((coin) => coin.rank != 0 && coin.is_active && !coin.is_new)
      );
    }
  }, [data]);
  if (isLoading) {
    return (
      <Loader>
        <ActivityIndicator color="white" size="large" />
      </Loader>
    );
  }
  return (
    <Container>
      <List
        data={cleanData}
        keyExtractor={(item) => item.id}
        numColumns={3}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item, index }) => (
          <Coin index={index} id={item.id} symbol={item.symbol} />
        )}
      />
    </Container>
  );
};

export default Home;

const Container = styled.View`
  background-color: ${BLACK_COLOR};
  flex: 1;
`;
const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const List = styled.FlatList`
  padding: 20px 10px;
  width: 100%;
`;
