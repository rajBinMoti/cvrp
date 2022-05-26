import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Button, Card } from 'react-native-elements';
import { getCities, getLocations, getSemesters } from '../reducer';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';



const SettingsScreen = ({ _setUser, token, url, user }) => {
    const [semester, setSemester] = useState([]);
    const [locations, setLocations] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState();
    const [selectedLoc, setSelectedLoc] = useState();

    useEffect(() => {
        let mounted = true;

        getSemesters(token, url)
            .then(items => {
                if (mounted) {
                    setSemester(items)
                }
            })

        getCities(token, url)
            .then(items => {
                if (mounted) {
                    setCities(items)
                }
            })

        getLocations(token, url)
            .then(items => {
                if (mounted) {
                    setLocations(items)
                }
            })

        return () => mounted = false;
    }, [])



    return (

        <ScrollView>
            <Text style={{ fontSize: 34, textAlign: 'center' }}>Update Location</Text>
            <Card.Divider />
            {
                semester.length > 0 ? <View style={{ marginBottom: 20 }}>
                    {
                        semester.map((sem, i) => {
                            if (sem.active)
                                return <Card key={i}>
                                    <Card.Title>Semester Name : {sem.name}</Card.Title>
                                    <Card.Divider />

                                    <Text>Status: {sem.active ? 'Active' : 'Closed'}</Text>
                                    <Text>Remarks: {sem.remark ? 'Active' : 'No Remarks'}</Text>
                                    {
                                        sem.active ? <>
                                            <Card.Divider />
                                            <Text>Select City: </Text>
                                            <Picker
                                                selectedValue={selectedCity}
                                                onValueChange={(itemValue, itemIndex) =>
                                                    setSelectedCity(itemValue)
                                                }>
                                                {
                                                    cities.map((city, i) => {
                                                        return <Picker.Item key={i} label={city.name} value={city.id} />
                                                    })
                                                }
                                            </Picker>
                                            <Card.Divider />
                                            <Text>Select Locations: </Text>
                                            <Picker
                                                selectedValue={selectedLoc}
                                                onValueChange={(itemValue, itemIndex) =>
                                                    setSelectedLoc(itemValue)
                                                }>
                                                {
                                                    locations.map((location, i) => {
                                                        if (location.city === selectedCity)

                                                            return <Picker.Item key={i} label={location.name} value={location.id} />
                                                    })
                                                }
                                            </Picker>
                                        </> : null
                                    }
                                    <Card.Divider />
                                    <Button
                                        title={"Update Location"}
                                        onPress={() => {
                                            const config = {
                                                headers: {
                                                    "Content-Type": "application/json"
                                                }
                                            };

                                            const data = {
                                                "user_id": user.id,
                                                "roll_no": user.username,
                                                "location": selectedLoc,
                                                "semester": sem.id
                                            }

                                            const body = JSON.stringify(data);
                                            if (token) {
                                                config.headers["Authorization"] = `JWT ${token}`;
                                            }
                                            axios.post(`${url}/fleet/pickuppoints/`, body, config)
                                                .then(res => res.json())
                                                .catch(err => alert('Already Updated'))
                                        }}
                                    />
                                </Card>
                        })
                    }
                </View>
                    : null
            }
        </ScrollView>
    )
}

export default SettingsScreen