import { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { store, persistor } from "./store/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { increment, decrement } from "./store/counterSlice";
import { updateData, resetData } from "./store/contentSlice";
import { fetchTodos } from "./store/todoSlice";
import { createEmploye, updateEmploye, getPosts } from "./store/employeSlice";
import { getPost } from "./store/postSlice";

const MyComponent = () => {
    const dispatch = useDispatch();
    const { data, isloading, error } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(getPost());
    }, []);
    // const handleButton = async () => {
    //     const newEmployeeData = {
    //         title: "MEDIA ",
    //         body: "Expo",
    //     };
    //     dispatch(createEmploye(newEmployeeData));
    // };
    // const updateButton = (userId: any) => {
    //     const updateData = {
    //         title: "INDIA",
    //         body: "KERALA",
    //         userId: userId,
    //     };
    //     dispatch(updateEmploye({ id: userId, data: updateData }));
    // };
    if (isloading) {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 20, color: "red" }}>LOADING!!!</Text>
            </View>
        );
    }
    if (error) {
        return (
            <View style={styles.container}>
                <Text>{error}</Text>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <Text>{data?.userId}</Text>
            <Text>{data?.title}</Text>
            <Text>{data?.body}</Text>
        </View>
    );
};

// const ContentComponent = () => {
//   const [name, setName] = useState<string>("");
//   const [place, setPlace] = useState<string>("");
//   const [age, setAge] = useState<number>();

//   const dispatch = useDispatch();
//   const state = useSelector((state) => state.content);

//   const handleButton = () => {
//     dispatch(
//       updateData({
//         name: name,
//         place: place,
//         age: age,
//       })
//     );
//     console.log(state, "SALMAN");
//   };

//   const onResetButton = () => {
//     dispatch(resetData());
//   };
//   return (
//     <View style={styles.container}>
//       <Text>Name:{state?.name}</Text>
//       <TextInput
//         style={{
//           width: "100%",
//           height: 30,
//           borderWidth: 2,
//           // padding: 12,
//         }}
//         placeholder="name"
//         value={name}
//         onChangeText={(text) => {
//           setName(text);
//         }}
//       />
//       <Text>Place:{state?.place}</Text>
//       <TextInput
//         style={{
//           width: "100%",
//           height: 30,
//           borderWidth: 2,
//           // padding: 12,
//         }}
//         placeholder="Place"
//         value={place}
//         onChangeText={(text) => {
//           setPlace(text);
//         }}
//       />
//       <Text>AGE:{state?.age}</Text>
//       <TextInput
//         style={{
//           width: "100%",
//           height: 30,
//           borderWidth: 2,
//           // padding: 12,
//         }}
//         keyboardType="numeric"
//         placeholder="AGE"
//         value={age !== undefined ? age.toString() : ""}
//         onChangeText={(text) => setAge(text ? parseInt(text, 10) : undefined)}
//       />
//       <TouchableOpacity
//         style={{
//           width: "100%",
//           height: 30,
//           marginTop: 20,
//           backgroundColor: "green",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//         onPress={() => {
//           handleButton();
//         }}
//       >
//         <Text>UPDATE STORE</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={{
//           width: "100%",
//           height: 30,
//           marginTop: 20,
//           backgroundColor: "green",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//         onPress={() => {
//           onResetButton();
//         }}
//       >
//         <Text>RESET ALL VALUE</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <MyComponent />
                {/* <ContentComponent /> */}
            </PersistGate>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 120,
    },
});
