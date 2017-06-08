import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import Expo, { SQLite } from 'expo';

const Home = () => (
    <Text style={styles.header}>
      Home
    </Text>
);

const About = () => (
    <Text style={styles.header}>
      About
    </Text>
);

export default class App extends React.Component {
    render() {
        return (
            <NativeRouter>
              <View style={styles.container}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Home} />
              </View>
            </NativeRouter>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        padding: 10
    },
    header: {
        fontSize: 20
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    subNavItem: {
        padding: 5
    },
    topic: {
        textAlign: 'center',
        fontSize: 15
    }
});
