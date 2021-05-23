/* eslint-disable no-use-before-define */
import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete'

export default function AutocompleteSearch() {
    const { 
        ready, 
        value, 
        suggestions: {
            status, 
            data
        }, 
        setValue, 
        clearSuggestion } = usePlacesAutocomplete({})
    return (
        <Autocomplete
            id="combo-box"
            options={value}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            onChange={address => { console.log(address) }}
            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
        />
    );
}
