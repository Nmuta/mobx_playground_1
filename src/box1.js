import React, { Component } from 'react';
import './App.css';
import {observable} from "mobx";
import {observer} from "mobx-react";


const Box1 = observer (({ store }) => {
    return (
        <div className="counter_box"> Count: {store.count}</div>
    )
})

export default Box1;
