import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

let screenWidth = Dimensions.get('screen').width;

const Form = ({navigation}) => {
  const [webUrl, setWebUrl] = useState('');
  const uploadURL = () => {
    ToastAndroid.show('Url has been uploaded!', ToastAndroid.LONG);
    console.log('WebURL :  ', webUrl);
    setWebUrl('');
  };
  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.inputLabelPlain}>URL</Text>
        <View>
          <TextInput
            style={styles.plainInput}
            onChangeText={setWebUrl}
            value={webUrl}
            placeholder="Place URL here"
            placeholderTextColor={'#808080'}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.saveUrlButton}
        onPress={() => uploadURL()}>
        <Text style={styles.saveUrlButtonText}>Save URL</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.testUrlButton}
        onPress={() => navigation.navigate('WebViewTest')}>
        <Text style={styles.saveUrlButtonText}>Test Saved URL</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    backgroundColor: '#ffffff',
    height: '100%',
    paddingTop: '70%',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  inputLabelPlain: {
    fontWeight: '600',
    backgroundColor: '#ffffff',
    position: 'absolute',
    left: screenWidth / 7.5,
    zIndex: 1,
    paddingLeft: 4,
    paddingRight: 4,
    height: 20,
    color: '#000000',
    borderRadius: 10,
  },
  plainInput: {
    flexDirection: 'row',
    borderRadius: 15,
    paddingRight: 5,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    width: '80%',
    height: 55,
    marginTop: 10,
    fontSize: 16,
    color: '#000000',
    marginHorizontal: '10%',
    borderColor: '#808080',
    borderWidth: 1,
  },
  saveUrlButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#088f31',
    width: '80%',
    height: 52,
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: '10%',
  },
  testUrlButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0441e9',
    width: '80%',
    height: 52,
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: '10%',
  },

  saveUrlButtonText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '500',
    marginHorizontal: 10,
  },
});
export default Form;
