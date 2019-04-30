/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, ScrollView, View, Image} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<Props> {
  render() {
    let iconSize = 30;

    return (

      <View style={styles.container}>
        <ScrollView>

            <View style={styles.topNav}>
              <Icon style={styles.nav} name="align-left" size={iconSize} color="#FFF" />
              <Icon style={styles.logo} name="shield" size={iconSize} color="#FFF"/>
            </View>

            <View style={ styles.infoTextWrap }>
              <Text style={styles.infoText}> product design </Text>
              <Text style={styles.infoText}> web design </Text>
              <Text style={styles.infoText}> strategy </Text>
            </View>

            <View style={ styles.mainHeadingWrap }>
              <Text style={styles.mainHeading}>A Next Level Design Studio</Text>
            </View>

            <View style={ [styles.sqGrid, styles.sqGridOne] }>
              <View style={ [styles.smSq , styles.googleSq] }>
                <Image style={ styles.googleLogo } source={require("./images/google.png")}/>
              </View>
              <View style={ [styles.lgSq , styles.nikeSq] }>
                <View style={ styles.nikeWrap }>
                  <View style={styles.brandLogoWrap}>
                    <Image style={styles.nikeLogo} source={require("./images/nike.png")}/>
                  </View>
                  <View style={styles.brandNameWrap}>
                      <Text style={styles.brandName}> Nike </Text>
                      <Text style={styles.brandSlogan}> Just Do It </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={ [styles.sqGrid] }>
              <View style={ [styles.mdSq , styles.playStationSq] }>
                <Image style={styles.playstationLogo} source={require("./images/playstation.png")}/>
              </View>
              <View style={ [styles.mdSq , styles.appleSq] }>
                <Image style={styles.appleLogo} source={require("./images/apple.png")}/>
              </View>
            </View>

        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202383',
  },
  topNav: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 75
  },

  nav: {
    flex: 0.2,
    paddingLeft: 40,
  },
  logo: {
    flex: 0.2,
    paddingLeft:40
  },

  infoTextWrap: {
    flex: 0.2,
    paddingTop: 40,
  },
  infoText: {
    color: "#6656C6",
    fontSize: 15,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 40
  },
  mainHeadingWrap: {
    flex: 0.6,
    flexDirection: "row",
    paddingTop: 35,
    paddingBottom: 45,
  },
  mainHeading: {
    flex: 0.5,
    color: "#E062FE",
    fontSize: 55,
    paddingLeft: 40
  },


  sqGrid: {
    flexDirection: "row",
  },
  sqGridOne: {
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },


  smSq: {
    flex: 0.5,
    height: 150,
  },
  mdSq: {
    flex:0.5,
    height: 200,
  },
  lgSq: {
    flex:0.5,
    height: 225,
  },

  googleSq: {
    backgroundColor: "#3A82FB",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  googleLogo: {
    width: 75,
    height: 25
  },
  nikeSq: {
    backgroundColor: "#FFF",
    flex : 1,
    justifyContent: "center",
  },
  nikeLogo: {
    width: 75,
    height: 75
  },
  nikeWrap: {
    flex:1,
    flexDirection: "column",
  },
  brandLogoWrap: {
    flex:1,
    justifyContent:"flex-end",
    alignItems:"center",
  },
  brandNameWrap: {
    flex: 0.3,
    padding: 30
  },
  playStationSq: {
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center"
  },
  playstationLogo: {
    width: 120,
    height: 130
  },

  appleSq: {
    backgroundColor: "#DF61FE",
    justifyContent: "center",
    alignItems: "center"
  },
  appleLogo: {
    width: 50,
    height: 60
  },

  brandName: {
    fontWeight: "600"
  },
  brandSlogan: {
    fontWeight: "100",
    color: "#071d47"
  },

});
