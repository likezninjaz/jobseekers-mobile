import {StyleSheet} from "react-native";

export default StyleSheet.create({
    preloader: {
        alignSelf: 'center'
    },
    tableItem: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomColor: '#e9ecf3',
        borderBottomWidth: 1
    },
    tableItemImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    tableItemInfo: {
        marginLeft: 10
    },
    tableItemName: {
        fontSize: 20
    },
    tableItemSpecialization: {
        fontSize: 15
    }
});
   