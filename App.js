import React from 'react';
import { Navigation } from 'react-native-navigation';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import 'react-native-gesture-handler';

const App = (props) => {
  return (
    <>
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Hone</Text>
          <Text style={styles.sectionDescription}>
            Improve your technique
          </Text>
          <Button
            title='Go to Camera'
            color='#710ce3'
            onPress={() => Navigation.push(props.componentId, {
              component: {
                name: 'CameraScreen',
                options: {
                  topBar: {
                    title: {
                      text: 'Camera',
                    },
                  }
                }
              }
            })}/>
        </View>
      </View>
    </>

  );
};

App.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'white'
    },
    background: {
      color: 'orange'
    }
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  sectionContainer: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
