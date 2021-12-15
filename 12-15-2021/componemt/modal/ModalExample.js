import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Button, Modal,Alert } from 'react-native'

const ModalExample = () => {

    const [showModal, setShowModal] = React.useState(false)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.centeredView}>
                <Modal
                    animationType='slide'
                    transparent={false}
                    visible={showModal}
                    onRequestClose={() => {
                        Alert.alert("Closing Modal")
                        setShowModal(!showModal)
                    }}>
                    <View style={styles.centeredView}>
                        <Text>Modal is Online</Text>
                        <Button
                            style={styles.button,styles.buttonClose}
                            title='Click To Close Modal'
                            onPress={() => setShowModal(!showModal)} />
                    </View>
                </Modal>
                <Button
                title='Click To Open Modal'
                onPress={()=> setShowModal(!showModal)}
                />
            </View>
        </SafeAreaView>
    )
}

export default ModalExample

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });