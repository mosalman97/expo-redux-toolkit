// Formik x React Native example
import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { Formik } from "formik";
import { object, string, number, date, InferType } from "yup";

let userSchema = object({
    firstName: string().required("please enter first name"),
    lastName: string().required("please enter last name"),
    email: string().email("please enter email"),
});

const FormScreen = (props: any) => (
    <View style={{ flex: 1, justifyContent: "center" }}>
        <Formik
            initialValues={{ email: "", firstName: "", lastName: "" }}
            onSubmit={(values) => console.log(values)}
            validationSchema={userSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <View>
                    <TextInput
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                        placeholder="enter something"
                        style={{
                            width: "100%",
                            // height: 16,
                            borderWidth: 2,
                            padding: 16,
                        }}
                    />
                    {errors.email && (
                        <Text style={{ color: "red", width: "100%" }}>
                            {errors.email}
                        </Text>
                    )}
                    <TextInput
                        onChangeText={handleChange("firstName")}
                        onBlur={handleBlur("firstName")}
                        value={values.firstName}
                        placeholder="first name"
                        style={{
                            width: "100%",
                            // height: 16,
                            borderWidth: 2,
                            padding: 16,
                        }}
                    />
                    {errors.firstName && (
                        <Text style={{ color: "red", width: "100%" }}>
                            {errors.firstName}
                        </Text>
                    )}
                    <TextInput
                        onChangeText={handleChange("lastName")}
                        onBlur={handleBlur("lastName")}
                        value={values.lastName}
                        placeholder="Last Name"
                        style={{
                            width: "100%",
                            // height: 16,
                            borderWidth: 2,
                            padding: 16,
                        }}
                    />
                    {errors.lastName && (
                        <Text style={{ color: "red", width: "100%" }}>
                            {errors.lastName}
                        </Text>
                    )}
                    <Button onPress={handleSubmit} title="Submit" />
                </View>
            )}
        </Formik>
    </View>
);

export default FormScreen;
