import React,{ Component } from 'react';
import Restaurant from './Restaurant';
import { Table, TableBody, TableHead, TableRow, TableCell } from '@material-ui/core';


class ListeRestaurant extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data : {},
            isLoading: true
        };
    }
  
    componentDidMount() {
        fetch('http://localhost:8080/api/restaurants')
          .then(response => response.json())
          .then(data => this.setState({ data: data.data, isLoading: false }));
    }

    render(){
        const { hobbies,data,isLoading } = this.state
        var tab = []

        if(!isLoading){
            

            data.forEach(element => {
                tab.push(<Restaurant resto={element}/>)
            });
        }
            return (   
            <Table className="table" aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Cuisine</TableCell>
                        <TableCell align="right">Address</TableCell>
                        <TableCell align="right">Grade</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tab} 
                </TableBody>
            </Table>
            )
        

    }
}

export default ListeRestaurant