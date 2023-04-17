import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    searchAndIconContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft:20

      },
      searchBarContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight:40,
      },
      icon_usemylocation: {
        position:'absolute',
        display:'flex',
        top:23,
        left:65,
    },
    card:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:14,

    },
    secondary_card:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    cityText: {
      fontSize: 30,
        marginTop: 5,
        marginBottom: 5,
        color:'black',
      },
    cityContainer:{
      flex:0,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft:120,
      marginRight:120,
    }
     

})
