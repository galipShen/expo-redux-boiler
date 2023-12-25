import { Button, StyleSheet, Text, View, StatusBar } from "react-native";
import { Provider, useSelector, useDispatch } from "react-redux";
import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";

//define an initial state
const initialState = {
  counter: 0,
};
//reducers obj update the state
const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});

// configureStore creates a redux store by calling intenally createStore  method
const store = configureStore({
  reducer: counterSlice.reducer,
});

function Counter() {
  // get state with useSelector
  const counter = useSelector((state) => state.counter);
  //update counter with dispatch
  const dispatch = useDispatch();
  return (
    <>
      <View>
        <StatusBar />
        <Text>Counter: {counter}</Text>
        <Button
          title="increment"
          onPress={() => dispatch(counterSlice.actions.increment())}
        />
        <Button
          title="decrement"
          onPress={() => dispatch(counterSlice.actions.decrement())}
        />
      </View>
    </>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
