import React, { Component } from "react";
import { Header, Footer, Content, FooterTab, Button, Icon } from "native-base";
import { Animated, View, Text } from "react-native";
import Profile from "./Profile";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import CustomHeader from "./../components/interface/CustomHeader";
import { footerFontSize, defaultAnimationTime, profileColor, skillsColor, educationColor, experiencieColor, screenWidth } from "./../assets/css/general.js";
import HelperProvider from "../providers/HelperProvider";

class TabScreen extends Component {
    constructor(props) {
        super(props);
        this.creatingSingletonGroup();
        this.bindingFunctions()
        this.settingState();
        this.creatingAnimatedValues();
    }

    settingState() {
        this.state = { currentInterface: 2 };
    }

    bindingFunctions() {
        this.renderComponent = this.renderComponent.bind(this);
    }

    creatingAnimatedValues() {
        this.profileMarginTop = new Animated.Value(50);
        this.profileOpacity = new Animated.Value(0);
        this.skillsOpacity = new Animated.Value(0);
        this.educationOpacity = new Animated.Value(0);
        this.experienceOpacity = new Animated.Value(0);
        this.skillsMarginTop = new Animated.Value(25);
        this.educationMarginTop = new Animated.Value(25);
        this.experienceMarginTop = new Animated.Value(25);
        this.titleOpacity = new Animated.Value(1);
        this.nameOpacity = new Animated.Value(1);
        this.nameWidth = new Animated.Value(screenWidth - screenWidth * 0.3);
        this.titleWidth = new Animated.Value(screenWidth - screenWidth * 0.5);
        this.marginTopAvatar = new Animated.Value(0);
        this.marginLeftAvatar = new Animated.Value(0);
        this.avatarWidth = new Animated.Value(80);
        this.avatarHeight = new Animated.Value(100);
    }

    creatingSingletonGroup() {
        this.helper = HelperProvider.getInstance();
    }

    componentDidMount() {
        this.startButtonsShowUp();
    }

    startButtonsShowUp = () => {
        this.helper.animateVariable(this.profileMarginTop, 0, 0, 0).start();
        this.helper.animateVariable(this.skillsOpacity, 1, defaultAnimationTime * 3, defaultAnimationTime / 3).start();
        this.helper.animateVariable(this.skillsMarginTop, 0, defaultAnimationTime * 3, defaultAnimationTime / 3).start();
        this.helper.animateVariable(this.educationOpacity, 1, defaultAnimationTime * 3, defaultAnimationTime / 2).start();
        this.helper.animateVariable(this.educationMarginTop, 0, defaultAnimationTime * 3, defaultAnimationTime / 2).start();
        this.helper.animateVariable(this.experienceOpacity, 1, defaultAnimationTime * 3, defaultAnimationTime).start();
        this.helper.animateVariable(this.experienceMarginTop, 0, defaultAnimationTime * 3, defaultAnimationTime).start();
    };

    renderComponent = () => {
        switch (this.state.currentInterface) {
            case 1: {
                return <Profile />;
                break;
            }
            case 2: {
                return <Skills />;
                break;
            }
            case 3: {
                return <Education />;
                break;
            }
            case 4: {
                return <Experience />;
                break;
            }
            default: {
                console.log("wot!");
            }
        }
    };

    changeInterface = i => {
        this.setState({ currentInterface: i });
    };

    isButtonActive = b => {
        if (b == this.state.currentInterface) {
            return true;
        } else {
            return false;
        }
    };

    render() {
        return (
            <View style={{ justifyContent: "flex-start", flex: 1, width: screenWidth }}>
                <Header style={{ height: 100, width: screenWidth, marginLeft: 0 }}>
                    <CustomHeader />
                </Header>
                <Content>
                    <View style={{ marginTop: 0, marginLeft: 0, marginRight: 5 }}>
                        {this.renderComponent()}
                    </View>
                </Content>
                <Footer>
                    <FooterTab>
                        <Animated.View
                            style={{
                                marginTop: this.profileMarginTop,
                                backgroundColor: "#f8f8f8"
                            }}
                        >
                            <Button
                                active={this.isButtonActive(1)}
                                vertical
                                onPress={() => {
                                    this.changeInterface(1);
                                }}
                            >
                                <Icon name="ios-contact" style={{ color: "gray" }} />
                                <Text
                                    style={{
                                        fontFamily: "CenturyGothic",
                                        fontSize: footerFontSize
                                    }}
                                >
                                    Profile
                </Text>
                                <View style={{ marginBottom: -6 }}>
                                    <View
                                        style={{
                                            width: screenWidth / 4,
                                            height: 5,
                                            backgroundColor: profileColor
                                        }}
                                    />
                                </View>
                            </Button>
                        </Animated.View>

                        <Animated.View
                            style={{
                                opacity: this.skillsOpacity,
                                marginTop: this.skillsMarginTop,
                                backgroundColor: "#f8f8f8"
                            }}
                        >
                            <Button
                                active={this.isButtonActive(2)}
                                onPress={() => {
                                    this.changeInterface(2);
                                }}
                            >
                                <Icon name="ios-cog" style={{ color: "gray" }} />
                                <Text
                                    style={{
                                        fontFamily: "CenturyGothic",
                                        fontSize: footerFontSize
                                    }}
                                >
                                    Skills
                </Text>
                                <View style={{ marginBottom: -6 }}>
                                    <View
                                        style={{
                                            width: screenWidth / 4,
                                            height: 5,
                                            backgroundColor: skillsColor
                                        }}
                                    />
                                </View>
                            </Button>
                        </Animated.View>

                        <Animated.View
                            style={{
                                opacity: this.educationOpacity,
                                marginTop: this.educationMarginTop,
                                backgroundColor: "#f8f8f8"
                            }}
                        >
                            <Button
                                active={this.isButtonActive(3)}
                                vertical
                                onPress={() => {
                                    this.changeInterface(3);
                                }}
                            >
                                <Icon name="ios-book" style={{ color: "gray" }} />
                                <Text
                                    style={{
                                        fontFamily: "CenturyGothic",
                                        fontSize: footerFontSize
                                    }}
                                >
                                    Educat.
                </Text>
                                <View style={{ marginBottom: -6 }}>
                                    <View
                                        style={{
                                            width: screenWidth / 4,
                                            height: 5,
                                            backgroundColor: educationColor
                                        }}
                                    />
                                </View>
                            </Button>
                        </Animated.View>

                        <Animated.View
                            style={{
                                opacity: this.experienceOpacity,
                                marginTop: this.experienceMarginTop,
                                backgroundColor: "#f8f8f8"
                            }}
                        >
                            <Button
                                active={this.isButtonActive(4)}
                                vertical
                                onPress={() => {
                                    this.changeInterface(4);
                                }}
                            >
                                <Icon name="ios-construct" style={{ color: "gray" }} />
                                <Text
                                    style={{
                                        fontFamily: "CenturyGothic",
                                        fontSize: footerFontSize
                                    }}
                                >
                                    Exper.
                </Text>
                                <View style={{ marginBottom: -6 }}>
                                    <View
                                        style={{
                                            width: screenWidth / 4,
                                            height: 5,
                                            backgroundColor: experiencieColor
                                        }}
                                    />
                                </View>
                            </Button>
                        </Animated.View>
                    </FooterTab>
                </Footer>
            </View>
        );
    }
}

export default TabScreen;
