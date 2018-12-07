import React, { Component } from 'react';
import ResultsComponent from './ResultsComponent';
import DetailComponent from './DetailComponent';
import SearchBar from './SearchBar';
import TopTenList from './TopTenList';
import './App.css';
import { Row, Col } from 'react-materialize'

class App extends Component {


    state = {

        results: [],
        searchTerm: '',
        selected: [],
        detailView: false,
        dbData: [],
    }

    handleSearch(query) {

        fetch('/search/' + query)
            .then(resp => resp.json())
            .then(results => {
                this.setState({
                    results: results,
                    detailView: false,
                    selected: []
                })
            })
            .catch((error) => {
                console.log(error)
            });

    }

    getDataFromDb() {

        fetch('/getData')
            .then(resp => resp.json())
            .then(results => {
                this.setState({
                    dbData: results
                })
            })
            .catch((error) => {
                console.log(error)
            });

    }

    backToSearch(prevSearch) {
        this.handleSearch(prevSearch)
        this.getDataFromDb()
    }

    handleViewItem = (item) => {
        let selected = item
        this.setState({
            results: [],
            detailView: true,
            selected: selected
        })
    }

    componentDidMount() {
        this.getDataFromDb()
    }

    render() {

        return (

            <div>
        <Row>     
  <Col s={6}>

     <SearchBar
            search={this.handleSearch.bind(this)}
            detailView={this.state.detailView}>
            </SearchBar>
                        <ResultsComponent
            searchResults={this.state.results}
            onView={this.handleViewItem}>
            </ResultsComponent>
  </Col>
  <Col s={6}>
       
            <TopTenList
            topten={this.state.dbData}
            detailView={this.state.detailView}
            returnToSearch={this.backToSearch.bind(this)}>
            </TopTenList>
  </Col>
</Row>



            <DetailComponent
            selected={this.state.selected}
            detailView={this.state.detailView}
            returnToSearch={this.backToSearch.bind(this)}
            >
            </DetailComponent>
        </div>

        );


    }
}

export default App;
