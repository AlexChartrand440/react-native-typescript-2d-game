// Copyright © 2018 Jamie Birch
// Licensed under GPL; find at repo root, in LICENSE.txt.

import React, {Component} from 'react';
import { Loop, Stage } from 'react-game-kit/native';
import {Button, StyleSheet, Text, View} from "react-native";
import {StyleObject} from "../utils/utils";
import {NavigationNavigatorProps} from "react-navigation";

type LandingProps = Props & NavigationNavigatorProps;

interface Props {
}

interface State {
}
export class Landing extends Component<LandingProps, State> {
    constructor(props: LandingProps) {
        super(props);
    }

    render() {
        return (
            <View
                style={[styles.mainView]}
            >
                <Text style={styles.title}>The Box</Text>
                <Button
                    onPress={() => (this.props.navigation as any).navigate('Play')}
                    title={"PLAY"}
                    accessibilityLabel="Play"
                />
            </View>
        );
    }
}

const styles: StyleObject = StyleSheet.create<StyleObject>({
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 32
    }
});