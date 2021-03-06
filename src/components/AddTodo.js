import React, { useState } from "react";
import {
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import DatePicker from 'react-native-datepicker';
import { Colors } from "./Colors";

export default function AddTodo(props) {
    const [text, setText] = useState('');
    const [valueText, setValueText] = useState('');
    const [date, setDate] = useState();

    const todoText = (val) => {
        setText(val)
    }

    const priorityValue = (val) => {
        setValueText(val)
    }


    return (
        <View>
            <Modal visible={props.modalval} animationType="fade" transparent={true}>
                <View style={styles.externalView}>
                    <View style={styles.internalView}>
                        <Text style={styles.headerText}> Add Todo </Text>

                        <TextInput
                            style={styles.inputBox}
                            value={text}
                            onChangeText={todoText}
                        />
                        <Text style={styles.headerText}> Priority Value(1-10) </Text>

                        <TextInput
                            style={styles.priorityInputBox}
                            keyboardType='numeric'
                            maxLength={2}
                            value={valueText}
                            onChangeText={priorityValue}
                        />
                        <DatePicker
                            style={styles.dateStyle}
                            placeholder='Due Date'
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            date={date}
                            onDateChange={(val) => setDate(val)}

                        />
                        <View style={styles.thirdView}>
                            <TouchableOpacity onPress={props.showModal}>
                                <Text style={styles.textStyle}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => {
                                    props.addTodo(text, valueText, date)
                                    props.setModalVal(false);
                                }}
                            >
                                <Text style={styles.textStyle}> Done </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    externalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    internalView: {
        borderRadius: 15,
        paddingRight: 5,
        borderWidth: 1,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingTop: 15,
        paddingRight: 10,
        minWidth: 350,
        borderColor: Colors.lightgray,
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5,
    },

    inputBox: {
        borderWidth: 1,
        borderColor: Colors.lightgray,
        borderRadius: 10,
        height: 150,
        minWidth: 350,
        padding: 10,
    },
    priorityInputBox: {
        borderWidth: 1,
        borderColor: Colors.lightgray,
        borderRadius: 10,
        height: 50,
        minWidth: 350,
        padding: 10,
    },

    thirdView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
    },

    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 10,
    },

    textStyle: {
        color: Colors.blue,
        fontSize: 20,
    },
    dateStyle: {
        marginBottom: 10,
        marginTop: 15,
        borderColor: Colors.lightgray,
        minWidth: 350,
        marginLeft: 5,
        marginRight: 5
    }
});
