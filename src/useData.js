import React, { useReducer, useEffect } from 'react';
import moment from 'moment';
const URI = 'https://www.mocky.io/v2/5cd04a20320000442200fc10';
const testData = [{
    "timestamp": "2019-04-10",
    "game": "Callbreak Multiplier",
    "revenue": 25,
    "impressions": 1040555
},
{
    "timestamp": "2019-04-10",
    "game": "World Cricket Championship",
    "revenue": 150,
    "impressions": 1140555
},
{
    "timestamp": "2019-04-11",
    "game": "Callbreak Multiplier",
    "revenue": 140,
    "impressions": 1240000
},
{
    "timestamp": "2019-04-11",
    "game": "World Cricket Championship",
    "revenue": 130,
    "impressions": 1100666
},
{
    "timestamp": "2019-04-12",
    "game": "Callbreak Multiplier",
    "revenue": 150,
    "impressions": 1345222
},
{
    "timestamp": "2019-04-12",
    "game": "World Cricket Championship",
    "revenue": 76,
    "impressions": 1000111
},
{
    "timestamp": "2019-04-13",
    "game": "Callbreak Multiplier",
    "revenue": 50,
    "impressions": 1046123
},
{
    "timestamp": "2019-04-13",
    "game": "World Cricket Championship",
    "revenue": 300,
    "impressions": 5280000
},
{
    "timestamp": "2019-04-14",
    "game": "Callbreak Multiplier",
    "revenue": 50,
    "impressions": 1111222
},
{
    "timestamp": "2019-04-14",
    "game": "World Cricket Championship",
    "revenue": 110,
    "impressions": 1240555
},
{
    "timestamp": "2019-04-15",
    "game": "Callbreak Multiplier",
    "revenue": 95,
    "impressions": 1240555
},
{
    "timestamp": "2019-04-15",
    "game": "World Cricket Championship",
    "revenue": 75,
    "impressions": 1240555
},
{
    "timestamp": "2019-04-16",
    "game": "Callbreak Multiplier",
    "revenue": 85,
    "impressions": 1240555
},
{
    "timestamp": "2019-04-16",
    "game": "World Cricket Championship",
    "revenue": 150,
    "impressions": 1240555
},
{
    "timestamp": "2019-04-17",
    "game": "Callbreak Multiplier",
    "revenue": 100,
    "impressions": 1240555
},
{
    "timestamp": "2019-04-17",
    "game": "World Cricket Championships",
    "revenue": 200,
    "impressions": 1240555
},
{
    "timestamp": "2019-04-18",
    "game": "Callbreak Multiplier",
    "revenue": 500,
    "impressions": 5940555
},
{
    "timestamp": "2019-04-18",
    "game": "World Cricket Championship",
    "revenue": 120,
    "impressions": 1240555
},
{
    "timestamp": "2019-04-19",
    "game": "Callbreak Multiplier",
    "revenue": 150,
    "impressions": 1240555
},
{
    "timestamp": "2019-04-19",
    "game": "World Cricket Championship",
    "revenue": 100,
    "impressions": 1240555
}
]
const initialState = {
    isFetching: false,
    isFetchingError: false,
    allData: [], 
    data: [],
    error: null,
    startDate: moment(),
    endDate: moment(),
}

export default function useData() {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        dispatch({ type: GET_DATA_REQUEST })
        fetch(URI)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                dispatch({ type: GET_DATA_SUCCESS, payload: data })
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: GET_DATA_FAILURE, payload: err })
            })
    }, [])
    return { state, dispatch }
}

function reducer(state, action) {
    switch (action.type) {
        case GET_DATA_REQUEST:
            return { ...state, isFetching: true, isFetchingError: false };
        case GET_DATA_SUCCESS:
            return { ...state, isFetching: false, isFetchingError: false, data: action.payload, allData: action.payload };
        case GET_DATA_FAILURE:
            return { ...state, isFetching: false, isFetchingError: true };
        case SET_TIME_RANGE:
            console.log(state, action.payload)
            return {
                ...state,
                startDate: action.payload.startDate,
                endDate: action.payload.endDate,
                data: setDataByDateRange(state.allData, action.payload.startDate, action.payload.endDate)
            };
        default:
            return state
    }

}
function setDataByDateRange(data, startDate, endDate) {
    console.log(data, startDate, endDate)
    const newData = []
    data.filter(item => {
        if (moment(item.timestamp).isBetween(moment(startDate), moment(endDate))) {
            console.log('inside IF')
            newData.push(item)
        }
        console.log(newData)
    })
    return newData;
}
export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE';
export const SET_TIME_RANGE = 'SET_TIME_RANGE';