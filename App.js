import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from 'react-native-vector-icons';
import { metals_data } from './metal-data';



function HomeScreen() {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Pets Home!</Text>

        <FlatList
          data={metals_data}
          renderItem= {({ item }) => {
            return (
              <View style={styles.item}>
                <Text style={styles.band}> {item.band_name} </Text>
                <Text style={styles.orgin}>  {item.origin} </Text>
                <Text style={styles.formed}> {item.formed}  </Text>
                <Text style={styles.fans}> {item.fans*1000} </Text>
              </View>
            )
          }}
          keyExtractor={metals_data => metals_data.ID}
          />

      </View>
  );
}


function StatsScreen() {

  var countBand = metals_data.reduce(function (accumulator, item) {
    return accumulator + 1;
    }, 0);


  var countFans = metals_data.reduce(function (accumulator, item) {
      if(item.fans) {
        return accumulator + item.fans*1000
      }
      return accumulator + 0
      }, 0);

  var bandOrigin = metals_data.map(item => item.origin)
  var unique = bandOrigin.filter(function (value, index) {
    return bandOrigin.indexOf(value) === index;
  });

  var uniqueCount = unique.reduce(function (accumulator, item) {
      if(item) {
        return accumulator + 1
      }
      return accumulator + 0
      }, 0);

  var activeBands = metals_data.reduce(function (accumulator, item) {
          if(item.split == '-') {
            return accumulator + 1
          }
          return accumulator + 0
          }, 0);


    var splitBands = metals_data.reduce(function (accumulator, item) {
                  if(item.split != '-') {
                    return accumulator + 1
                  }
                  return accumulator + 0
                  }, 0);

  return (
      <View style={styles.container}>
        <Text style={styles.text}>Band: {countBand}</Text>
        <Text style={styles.text}>Fans: {countFans}</Text>
        <Text style={styles.text}>Countries: {uniqueCount} </Text>
        <Text style={styles.text}>ActiveBands: {activeBands} </Text>
        <Text style={styles.text}>SplitBands: {splitBands} </Text>

      </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ion-md-arrow-dropright-circle'
              : 'ion-md-arrow-dropright-circle';
          } else if (route.name === 'Stats') {
            iconName = focused ? 'ios-happy' : 'ios-happy';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Stats" component={StatsScreen} />



    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  band: {
    color: 'white',
    textAlign: 'left',
    top: 0
  },
  orgin: {
    color: 'white',
    textAlign: 'right',
    top: 0
  },
  fans: {
    color: 'white',
    textAlign: 'left',
    top: 0
  },
  formed: {
    color: 'white',
    textAlign: 'right',
    top: 0
  },
  item: {
    backgroundColor: 'grey',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  buttonContainer: {
   backgroundColor: '#222',
   borderRadius: 5,
   padding: 10,
   margin: 20
 },
 buttonText: {
    fontSize: 20,
    color: '#fff'
  },
});
