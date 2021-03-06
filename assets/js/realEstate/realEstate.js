import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from './Header.js'
import AboutUs from './pages/AboutUs'
import Advertise from './pages/Advertise'
import Register from './pages/Register'
import Login from './pages/Login'
import Filter from './Filter.js'
import Listings from './Listings.js'
import listingsData from './data/listingsData.js'

class RealEstate extends Component {
    constructor() {
        super()
        this.state = {
            name: 'chat',
            listingsData,
            city: 'All',
            homeType: 'All',
            bedrooms: '0',
            min_price: 0,
            max_price: 1000000,
            min_floor_space: 0,
            max_floor_space: 10000,
            elevator: false,
            finished_basement: false,
            gym: false,
            swimming_pool: false,
            fireplace: false,
            filteredData: listingsData,
            sortby: 'price-dsc',
            populateFormsData: '',
            view: 'box',
            search: ''
        }

        this.change = this.change.bind(this)
        this.filteredData = this.filteredData.bind(this)
        this.populateForms = this.populateForms.bind(this)
        this.changeView = this.changeView.bind(this)
    }

    componentWillMount(){
        var listingsData = this.state.listingsData.sort((a, b) => {
            return a.price - b.price
        })

        this.setState({
            listingsData
        })
    }

    change(event){
            var name = event.target.name;
            var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;

            this.setState({
            [name]: value
        }, () => {
            console.log(this.state)
            this.filteredData()
        })
    }

    changeView(viewName) {
        this.setState({
            view: viewName
        })
    }

    

    filteredData() {
        var newData = this.state.listingsData.filter((item) => {
            return item.price >= this.state.min_price && item.price <= this.state.max_price && item.floorSpace >=this.state.min_floor_space && item.floorSpace <= this.state.max_floor_space && item.rooms >= this.state.bedrooms      
         })

        if(this.state.city != "All") {
            newData = newData.filter((item) => {
                return item.city == this.state.city
            })
        }

        
        if(this.state.homeType != "All") {
            newData = newData.filter((item) => {
                return item.homeType == this.state.homeType
            })
        }

        //More - checkboxes
        //Elavator
        if(this.state.elevator != false) {
            newData = newData.filter((item) => {
                return item.more.includes('elevator');
            })

            console.log(newData);
        }

        //Swimming Pool
        if(this.state.swimming_pool != false) {
            newData = newData.filter((item) => {
                return item.more.includes('swimming pool');
            })

            console.log(newData);
        }

        //Finished Basement
        if(this.state.finished_basement != false) {
            newData = newData.filter((item) => {
                return item.more.includes('finished basement');
            })

            console.log(newData);
        }

        //Gym
        if(this.state.gym != false) {
            newData = newData.filter((item) => {
                return item.more.includes('gym');
            })

            console.log(newData);
        }

        //Fireplace
        if(this.state.fireplace != false) {
            newData = newData.filter((item) => {
                return item.more.includes('fireplace');
            })

            console.log(newData);
        }
        //End More - checkboxes 

        if(this.state.sortby == 'price-dsc') {
            newData = newData.sort((a, b) => {
                return a.price - b.price
            })
        }

        if(this.state.sortby == 'price-asc') {
            newData = newData.sort((a, b) => {
                return b.price - a.price
            })
        }

        if(this.state.search != ''){
            newData = newData.filter((item) => {
                var city = item.city.toLowerCase()
                var searchText = this.state.search.toLowerCase()
                var n = city.match(searchText)

                if(n != null){
                    return true
                }
            })
        }


        this.setState({
            filteredData: newData
        })
    }


    populateForms() {
        //City
        var cities = this.state.listingsData.map((item) => {
            return item.city
        })

        cities = new Set(cities)
        cities = [...cities]

        cities = cities.sort()

        //homeType
        var homeTypes = this.state.listingsData.map((item) => {
            return item.homeType
        })

        homeTypes = new Set(homeTypes)
        homeTypes = [...homeTypes]

        homeTypes = homeTypes.sort()

        //Bedrooms
        var bedrooms = this.state.listingsData.map((item) => {
            return item.rooms
        })

        bedrooms = new Set(bedrooms)
        bedrooms = [...bedrooms]

        bedrooms = bedrooms.sort()


        this.setState({
            populateFormsData: {
                homeTypes,
                bedrooms,
                cities,
            }
        })

    }

    
    render () { 
        return (
            <div>
                <section id="content-area">
                    <Filter change={this.change} globalState={this.state} populateAction={this.populateForms}></Filter>
                    <Listings listingsData={this.state.filteredData} change={this.change} globalState={this.state} changeView={this.changeView}></Listings>
                </section>
            </div>
        )
    }
}

export default RealEstate;

