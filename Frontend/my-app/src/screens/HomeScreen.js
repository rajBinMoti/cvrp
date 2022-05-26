import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Button, Card } from 'react-native-elements'
import { getSemesters } from '../reducer'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({ url, token }) => {
    const [semester, setSemester] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        let mounted = true;
        getSemesters(token, url)
            .then(items => {
                if (mounted) {
                    setSemester(items)
                }
            })
        return () => mounted = false;
    }, [])


    return (
        <ScrollView style={{ flex: 1 }}>
            <Text style={{ fontSize: 34, textAlign: 'center' }}>Active Semesters</Text>
            <Card.Divider />
            {
                semester.length > 0 ? <View style={{ marginBottom: 20 }}>
                    {
                        semester.map((sem, i) => {
                            return <Card key={i}>
                                <Card.Title>Semester Name : {sem.name}</Card.Title>
                                <Card.Divider />

                                <Text>Status: {sem.active ? 'Active' : 'Closed'}</Text>
                                <Text>Remarks: {sem.remark ? 'Active' : 'No Remarks'}</Text>
                                {
                                    sem.active ? <>
                                        <Card.Divider />
                                        <Button
                                            title={'Update Location'} 
                                            onPress={() => navigation.navigate('Update Locations')}
                                            />
                                    </> : null
                                }
                            </Card>
                        })
                    }
                </View>
                    : null
            }
        </ScrollView>
    )
}

export default HomeScreen