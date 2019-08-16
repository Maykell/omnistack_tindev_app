import React, { PureComponent } from "react";

import Container from "../Container";

import { screens } from "../../config";
import styles from "./styles";

import NavigationService from "../../navigation/NavigationService";

class ListItem extends PureComponent {
    state = {
        buyMore: false
    };

    componentDidMount() {
        const { item } = this.props;
        this.setState({ buyMore: item.buyMore });
    }

    _handleListItem = item => {
        NavigationService.navigate(screens.RegisterScreen, {
            item
        });
    };

    render() {
        const { item } = this.props;

        return <Container />;
    }
}

export default ListItem;
