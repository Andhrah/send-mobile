/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp  } from 'react-native-responsive-screen';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



export default class Slide2 extends Component {
  navigateTo = (screen, params) => this.props.navigation.navigate(screen, params);
  render() {
    const {
      viewStyle,
      imageViewStyle,
      logoImageStyle,
      containerViewStyle,
      partnerViewStyle,
      partnerTextStyle,
      uberImageStyle,
      c9ImageStyle,
      secondViewStyle,
      sourcingTextStyle,
      responseTextStyle,
      equipmentViewStyle,
      equipmentTextStyle,
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
              <View style={partnerViewStyle}>
                <Text style={partnerTextStyle}>
                  PARTNERS
                </Text>

                <Image
                  source={require('../assets/images/uber-freight.png')}
                  style={uberImageStyle}
                />

                <Image
                  source={require('../assets/images/C9.png')}
                  style={c9ImageStyle}
                />
              </View>

              <View style={viewStyle}>
                <View style={secondViewStyle}>
                  <Text style={sourcingTextStyle}>
                    Millions of units in {'\n'}
                    medicial equipment ready to go
                  </Text>
                  <Text style={responseTextStyle}>
                    We're working with manufacturers producing {'\n'}
                    millions of high demand products per week.
                  </Text>

                  <View style={equipmentViewStyle}>
                    <View>
                      <Image
                        source={require('../assets/images/respirators.png')}
                      />
                      <Text style={equipmentTextStyle}>
                        Respirators
                      </Text>
                    </View>

                    <View>
                    <Image
                        source={require('../assets/images/face-shield.png')}
                      />
                      <Text style={equipmentTextStyle}>
                        Face Shields
                      </Text>
                    </View>

                    <View>
                      <Image
                        source={require('../assets/images/ventilators.png')}
                      />
                      <Text style={equipmentTextStyle}>
                        Ventilators
                      </Text>
                    </View>

                    <View>
                    <Image
                        source={require('../assets/images/wipes.png')}
                      />
                      <Text style={equipmentTextStyle}>
                        Wipes
                      </Text>
                    </View>
                  </View>

                  <View style={equipmentViewStyle}>
                    <View>
                      <Image
                        source={require('../assets/images/gloves.png')}
                      />
                      <Text style={equipmentTextStyle}>
                        Gloves
                      </Text>
                    </View>

                    <View>
                    <Image
                        source={require('../assets/images/sanitizers.png')}
                      />
                      <Text style={equipmentTextStyle}>
                        Sanitizer
                      </Text>
                    </View>

                    <View>
                      <Image
                        source={require('../assets/images/masks.png')}
                      />
                      <Text style={equipmentTextStyle}>
                        Masks
                      </Text>
                    </View>

                    <View>
                    <Image
                        source={require('../assets/images/gowns.png')}
                      />
                      <Text style={equipmentTextStyle}>
                        Gowns
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity
                    onPress={() => this.navigateTo('Slide3', {transition: 'fadeIn'})}
                    style={buttonStyle}>
                    <Text style={buttonTextStyle}>
                      Supply Medical Equipment
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
    paddingTop: hp(5),
    paddingHorizontal: hp(3),
    paddingBottom: hp(10),
  },
  viewStyle: {
    alignContent: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  partnerViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  partnerTextStyle: {
    fontSize: RFPercentage(2),
    color: '#6984a3',
  },
  uberImageStyle: {
    width: wp(29.8),
    height: hp(3),
    tintColor: '#6c757d',
  },
  c9ImageStyle: {
    width: wp(14),
    height: hp(3.3),
    tintColor: '#6c757d',
  },
  sourcingTextStyle: {
    fontSize: RFPercentage(2.8),
    fontWeight: 'bold',
    marginBottom: hp(3),
    textAlign: 'center',
  },
  responseTextStyle: {
    fontSize: RFPercentage(2.4),
    marginBottom: hp(4),
    color: '#90A4AE',
    textAlign: 'center',
  },
  equipmentViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(2),
  },
  equipmentTextStyle: {
    marginTop: hp(2),
    fontSize: RFPercentage(1.5),
  },
  buttonStyle: {
    backgroundColor: '#CFD8DC',
    paddingVertical: hp(1.5),
    borderRadius: 5,
    marginBottom: hp(4),
    width: '70%',
    alignSelf: 'center',
    marginTop: hp(5),
  },
  buttonTextStyle: {
    color: '#2f80ed',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
