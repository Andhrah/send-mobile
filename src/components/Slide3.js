/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp  } from 'react-native-responsive-screen';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class Slide3 extends Component {
  navigateTo = (screen, params) => this.props.navigation.navigate(screen, params);
  render() {
    const {
      viewStyle,
      imageViewStyle,
      logoImageStyle,
      containerViewStyle,
      nextStepTextStyle,
      signupViewStyle,
      secondViewStyle,
      signupTextStyle,
      secondSignupTextStyle,
      buttonStyle,
      buttonTextStyle,
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

          <View style={containerViewStyle}>
            <KeyboardAwareScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ height: '100%'}}
              keyboardShouldPersistTaps="handled"
              enableOnAndroid={true}
              extraScrollHeight={hp(15)}
              extraHeight={hp(15)}>
              <Text style={nextStepTextStyle}>
                Here are the next steps:
              </Text>

              <View style={viewStyle}>
                <View style={secondViewStyle}>
                  <View style={signupViewStyle}>
                    <Text style={signupTextStyle}>
                      Sign up
                    </Text>

                    <Text style={secondSignupTextStyle}>
                      Create an account and complete {'\n'}
                      your request in less than 3 {'\n'}
                      minutes.
                    </Text>
                  </View>

                  <View style={signupViewStyle}>
                    <Text style={signupTextStyle}>
                      Match with suppliers
                    </Text>

                    <Text style={secondSignupTextStyle}>
                    After completing your request, {'\n'} we’ll notify relevant suppliers to {'\n'} start bidding.
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={buttonStyle}>
                    <Text style={buttonTextStyle}>
                      Start
                    </Text>
                  </TouchableOpacity>
                </View>
            </View>
            </KeyboardAwareScrollView>
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
  containerViewStyle: {
    backgroundColor: 'rgba(47,128,237,.0509804)',
    height: '100%',
    paddingTop: hp(3),
    paddingHorizontal: hp(3),
    paddingBottom: hp(10),
  },
  viewStyle: {
    alignContent: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  nextStepTextStyle: {
    fontSize: RFPercentage(3),
    textAlign: 'center',
    marginBottom: hp(2),
  },
  signupViewStyle: {
    backgroundColor: '#FFFFFF',
    height: hp(26),
    width: wp(76),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1.5,
    marginBottom: hp(4),
  },
  signupTextStyle: {
    fontSize: RFPercentage(2.7),
    fontWeight: 'bold',
    marginBottom: hp(1.8),
  },
  secondSignupTextStyle: {
    fontSize: RFPercentage(2.2),
    marginBottom: hp(1),
    lineHeight: hp(2.5),
    textAlign: 'center',
  },
  secondViewStyle: {
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: '#2f80ed',
    paddingVertical: hp(1.5),
    borderRadius: 5,
    marginBottom: hp(5),
    width: '70%',
    alignSelf: 'center',
    marginTop: hp(5),
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
