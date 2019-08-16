import React, { PureComponent } from "react";
import { FlatList } from "react-native";
import { Container, ListEmpty, ListItem } from "../../components";
import styles from "./styles";

export default class List extends PureComponent {
    _renderItem = ({ item }) => <ListItem item={item} />;

    _renderList = () => {
        const { data } = this.props;

        return (
            <FlatList
                data={data}
                extraData={this.state}
                keyExtractor={(item, index) => item + index}
                ListEmptyComponent={
                    <ListEmpty title="Não há items cadastrados" />
                }
                contentContainerStyle={styles.listContentContainer}
                renderItem={this._renderItem}
            />
        );
    };

    render() {
        return <Container>{this._renderList()}</Container>;
    }
}
