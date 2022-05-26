import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Card } from 'react-native-elements'
// import { getSemesters } from '../reducer'

const ProfileScreen = ({ _setUser, user }) => {
    return (
        <View style={styles.container}>
            <Card style={{ flex: 1 }}>
                <View style={styles.row}>
                    <Text style={styles.h2}>User ID : </Text>
                    <Text style={styles.h3}>{user.id}</Text>
                </View>
                <Card.Divider />
                <View style={styles.row}>
                    <Text style={styles.h2}>First Name: </Text>
                    <Text style={styles.h3}>{user.first_name}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.h2}>Last Name: </Text>
                    <Text style={styles.h3}>{user.last_name}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.h2}>Username: </Text>
                    <Text style={styles.h3}>{user.username}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.h2}>Email: </Text>
                    <Text style={styles.h3}>{user.email}</Text>
                </View>
                <Card.Divider />
                <Button
                    title={'Logout'}
                    onPress={() => _setUser(null)}
                />
            </Card>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 30
    },
    row: {
        // flex: 1,
        flexDirection: 'row'
    },
    h2: {
        fontSize: 21

    },
    h3: {
        fontSize: 21
    }
})