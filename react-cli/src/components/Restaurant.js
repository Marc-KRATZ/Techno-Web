import React,{ Component } from 'react';

import {TableCell, TableRow } from '@material-ui/core';

class Restaurant extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let moyenne = 0
        this.props.resto.grades.forEach(element => {
            moyenne += element.score
        });
        moyenne/=this.props.resto.grades.length
        return (
        <TableRow>
            <TableCell>{this.props.resto.name}</TableCell>
            <TableCell align="right">{this.props.resto.cuisine}</TableCell>
            <TableCell align="right">
                {this.props.resto.address.building} {this.props.resto.address.street} {this.props.resto.address.zipcode}
            </TableCell>
            <TableCell align="right">{moyenne}</TableCell> 
            <TableCell align="right"></TableCell>
        </TableRow>
        )
    }
}

export default Restaurant