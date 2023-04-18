import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen:{},
  main_card:{
      alignItems: 'center',
        paddingTop:14,
  },
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
        paddingTop:14,

    },
    secondary_card:{
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    cityText: {
      fontSize: 25,
        marginTop: 5,
        marginBottom: 5,
        color:'black',
      },
    cityContainer:{
      alignItems: 'center',
      justifyContent: 'flex-start',
    }
})
