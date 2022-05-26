import axios from 'axios'
import React, { useState } from 'react'
import { View, StyleSheet, SafeAreaView, } from 'react-native'
import { Button, Input, Text, Switch } from 'react-native-elements'



const AuthScreen = ({ _setUser, url }) => {
    const [mode, setmode] = useState(true)
    const [username, setUsername] = useState('root')
    const [password, setPassword] = useState('root')
    const [repassword, setRepassword] = useState('')
    const [error, setError] = useState('')
    const [checked, setChecked] = useState(true)
    const [checked1, setChecked1] = useState(false)

    const handleLogin = () => {
        if (username.length < 4 || password == '') {
            setError('Invalid Credentials')
        } else {
            setChecked1(true)
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            };

            const body = JSON.stringify({ username, password });
            axios
                .post(`${url}/api/auth/token/`, body, config)
                .then(res => {
                    const token = res.data.token;
                    const user = res.data.user;
                    setChecked1(false)
                    _setUser({
                        user: user,
                        token: token
                    })
                })
                .catch(err => {
                    setChecked1(false)
                    setError('Invalid Credentials')
                });
        }
    }

    const handleRegister = () => {
        if (username.length < 4) {
            setError('Username must be 4 character long')
        } else if (password !== repassword) {
            setError('Password doesn\'t match')
        }
        else {
            setChecked1(true)
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            };

            const body = JSON.stringify({ username, password });
            axios
                .post(`${url}/api/auth/register/`, body, config)
                .then(res => {
                    const token = res.data.token;
                    const user = res.data.user;
                    handleLogin()
                })
                .catch(err => {
                    setChecked1(false)
                    setError('Username already taken')
                });
        }

    }

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                {
                    mode === true ?
                        <Text style={styles.headerText}>Login</Text>
                        :
                        <Text style={styles.headerText}>Registration</Text>
                }
            </View>
            <Input
                value={username}
                onChangeText={setUsername}
                label={'Username'}
                leftIcon={{ type: 'font-awesome', name: 'user' }}
                placeholder='username'
            />
            <Input
                value={password}
                onChangeText={setPassword}
                label={'Password'}
                leftIcon={{ type: 'font-awesome', name: 'key' }}
                placeholder='********'
                secureTextEntry={checked}
            />
            {/* // errorMessage='ENTER A VALID ERROR HERE'
                    // errorStyle={{ color: 'red' }} */}
            {
                mode !== true ?
                    <>
                        <Input
                            value={repassword}
                            onChangeText={setRepassword}
                            label={'Confirm Password'}
                            leftIcon={{ type: 'font-awesome', name: 'key' }}
                            placeholder='********'
                            secureTextEntry={checked}
                        />
                    </> : null
            }
            {
                error !== '' ? <Text style={{ color: 'red' }}>{error}</Text> : null
            }
            {
                mode === true ?
                    <View>
                        <Button
                            title="Login"
                            loading={checked1}
                            onPress={() => handleLogin()}
                        />
                        <Button
                            containerStyle={{
                                width: 200,
                                marginHorizontal: 50,
                                marginVertical: 10,
                            }}
                            onPress={() => setmode(!mode)}
                            title="Resister here"
                            type="clear"
                            titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
                        />
                    </View>
                    :
                    <View>
                        <Button
                            title="Register"
                            loading={checked1}
                            onPress={() => handleRegister()}
                        />
                        <Button
                            containerStyle={{
                                width: 200,
                                marginHorizontal: 50,
                                marginVertical: 10,
                            }}
                            onPress={() => setmode(!mode)}
                            title="Login here"
                            type="clear"
                            titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
                        />
                    </View>
            }
            <View style={{ alignItems: 'stretch' }}>
                <Text style={{ marginLeft: 0 }}>Show Password</Text>
                <Switch
                    value={checked}
                    onValueChange={(value) => setChecked(value)}
                />
            </View>

        </SafeAreaView>
    )
}

export default AuthScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#fef',
        marginTop: 10,
        alignItems: 'center',
    },
    header: {
        marginBottom: 15
    },
    headerText: {
        fontSize: 32
    }
})