import React, {useState, useEffect} from 'react';
import {StyleSheet, ActivityIndicator, View, Text} from 'react-native';
import WebView from 'react-native-webview';

const WebViewTest = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [webUrl, setWebUrl] = useState('');
  console.log('webURL : ', webUrl);
  const loaded = () => {
    console.log('WebView is Loaded : ');
    setIsLoading(false);
  };
  const fetchURL = async () => {
    let headersList = {
      'Content-type': 'application/json',
    };
    let response = await fetch(
      'https://smartshipping.maxapex.net/apex/a223784/pdf/webapp',
      {
        method: 'GET',
        headers: headersList,
      },
    );
    let data = await response.text();
    data = JSON.parse(data);
    if (data && data.items && data.items[0] && data.items[0].app_url) {
      console.log(data.items[0].app_url);
      setWebUrl(data.items[0].app_url);
    }
  };
  useEffect(() => {
    fetchURL();
  });
  return (
    <View style={styles.root}>
      {isLoading && (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      {webUrl && webUrl.length > 0 && (
        <WebView
          source={{uri: webUrl}}
          onLoad={() => loaded()}
          onError={() => setIsError(true)}
        />
      )}
      {isError && (
        <View style={styles.center}>
          <Text style={styles.textColor}>
            Can't load resources, please try again later!
          </Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
  textColor: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '500',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
export default WebViewTest;
