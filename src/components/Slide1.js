/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp  } from 'react-native-responsive-screen';
import { RFPercentage } from 'react-native-responsive-fontsize';


export default class Slide1 extends Component {
  navigateTo = (screen, params) => this.props.navigation.navigate(screen, params);
  render() {
    const {
      imageViewStyle,
      viewStyle,
      logoImageStyle,
      secondViewStyle,
      lifesavingTextStyle,
      sourcingTextStyle,
      responseTextStyle,
      buttonStyle,
      buttonTextStyle,
      questionViewStyle,
      questionTextStyle,
      talkTextStyle,
    } = styles;
    return (
      <>
        <StatusBar
          backgroundColor="#1B62CC"
          hidden={false} translucent={false}
          barStyle="default"
        />
        <SafeAreaView style={{ flex: 1 }}>
          <View style={imageViewStyle}>
            <Image
              source={require('../assets/images/send-logo.png')}
              style={logoImageStyle}
            />
          </View>
          <View style={viewStyle}>
            <View style={secondViewStyle}>
              <Text style={lifesavingTextStyle}>
                LIFE SAVING PROCUREMENT
              </Text>
              <Text style={sourcingTextStyle}>
                Sourcing for COVID-19
              </Text>
              <Text style={responseTextStyle}>
                Response connects healthcare providers to medical suppliers with a sourcing platform built to accelerate emergency procurement
              </Text>

              <TouchableOpacity
                onPress={() => this.navigateTo('Slide2', {transition: 'fadeIn'})}
                style={buttonStyle}>
                <Text style={buttonTextStyle}>
                  Request Medical Equipment
                </Text>
              </TouchableOpacity>

              <View style={questionViewStyle}>
                <Text style={questionTextStyle}>
                  Questions? {' '}
                </Text>

                <TouchableOpacity>
                  <Text style={talkTextStyle}>Talk to us.</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
         </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  imageViewStyle: {
    height: hp(9),
    justifyContent: 'center',
    paddingLeft: hp(2),
    backgroundColor: '#FFFFFF',
  },
  logoImageStyle: {
    height: hp(3.5),
    width: wp(7),
  },
  viewStyle: {
    padding: hp(3),
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    height: '100%',

  },
  secondViewStyle: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  lifesavingTextStyle: {
    color: '#2196F3',
    fontSize: RFPercentage(2),
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: hp(1.5),
    textAlign: 'center',
  },
  sourcingTextStyle: {
    fontSize: RFPercentage(3.5),
    fontWeight: 'bold',
    marginBottom: hp(3),
    color: '#212529',
    textAlign: 'center',
  },
  responseTextStyle: {
    fontSize: RFPercentage(2.4),
    marginBottom: hp(4),
    color: '#6984a3',
    textAlign: 'center',
  },
  buttonStyle: {
    backgroundColor: '#EF5350',
    paddingVertical: hp(1.5),
    paddingHorizontal: hp(3),
    borderRadius: 5,
    marginBottom: hp(4),
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  questionViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  questionTextStyle: {
    fontSize: RFPercentage(2.2),
    color: '#6984a3',
  },
  talkTextStyle: {
    borderBottomWidth: 3,
    borderColor: '#1B62CC',
    paddingBottom: hp(0.6),
    fontSize: RFPercentage(2.2),
    color: '#6984a3',
  },
});
