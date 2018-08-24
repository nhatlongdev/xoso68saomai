import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import getTemp from '../api/getTemp';
import { connect } from 'react-redux';

import * as actionCreators from '../redux/actionCreators';

class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            cityName: '',
        }
    }

    getTempByCityName(){
        const {cityName} = this.state;
        // this.props.startFetch();
        // getTemp(cityName)
        // .then(temp => this.props.fetchSuccess(cityName, temp))
        // .catch(()=>this.props.fetchError());
        this.props.fetchDataThunk(cityName);
    }

    getMessageTemp(){
        const { cityName, error, isLoading, temp } = this.props;
        if(isLoading) return '...Loading';
        if(error) return 'Vui long thu lai';
        if(!cityName) return 'Vui long nhap vi tri can tra cuu';
        return `${cityName} nhiet do la ${temp} do C`;
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.messgeTemp}>{this.getMessageTemp()}</Text>
                <TextInput 
                    style={styles.textInput}
                    value = {this.state.cityName}
                    onChangeText = {text=>this.setState({
                        cityName:text
                    })}
                    placeholder = 'Enter location'
                />
                <TouchableOpacity onPress={this.getTempByCityName.bind(this)}>
                   <Text style={styles.button}>Lay nhiet do</Text>
                </TouchableOpacity>
               
            </View>
        );
    }
}

function mapStateToProps(state){
    return {
        cityName: state.cityName,
        temp: state.temp,
        isLoading: state.isLoading,
        error: state.error,
    }
}

export default connect(mapStateToProps, actionCreators)(Main);

const styles = StyleSheet.create({
    container:{
        backgroundColor:'lightblue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput:{
        backgroundColor:'black',
        color:'white',
        height:40,
        padding: 10,
        margin: 10,
        width:300
    },
    button:{
        backgroundColor:'gray',
        color:'white',
        padding:10,
    },
    messgeTemp:{
        fontSize: 20,
        fontWeight: 'bold',
    }
})