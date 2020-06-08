import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Button, ListGroup, ListGroupItem } from 'reactstrap';
import classnames from 'classnames';

class Planets extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            planets: [],
            activeTab: '1',
        };


    }

    toggle = tab => {
        if (this.state.activeTab !== tab) this.setState({ activeTab: tab });
    }


    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.planets.length === 0) {
            return {
                planets: nextProps.planets,

            };
        }
        return null;
    }

    toggleFav(planetId) {
        this.setState({
            planets: this.state.planets.map(planet => {
                if (planet.id === planetId) {
                    return {
                        id: planet.id,
                        isFavourite: !planet.isFavourite,
                        name: planet.name
                    };
                }
                else
                    return planet;
            })
        });
    }


    render() {
        return (
            <div className="container" style={{ padding: '20px 15px' }}>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                            style={{ cursor: 'pointer' }}
                        >
                            Planets
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                            style={{ cursor: 'pointer' }}
                        >
                            Favourites
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">

                                <ListGroup>
                                    {
                                        this.state.planets.map((planet) => {
                                            let listItem = planet.name;
                                            let buttonNode = 'Mark as favourite';
                                            if (planet.isFavourite)
                                                buttonNode = 'Remove from favourites';
                                            return (<ListGroupItem className="justify-content-between" key={planet.id}>
                                                {listItem} {planet.isFavourite}
                                                <Button size="sm" onClick={() => this.toggleFav(planet.id)}>{buttonNode}</Button>
                                            </ListGroupItem>);
                                        })
                                    }
                                </ListGroup>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                {this.state.planets.filter(planet => planet.isFavourite).length > 0 &&
                                    <ListGroup>
                                        {this.state.planets.map((planet) => {
                                            if (planet.isFavourite)
                                                return <ListGroupItem key={planet.id}>{planet.name}</ListGroupItem>
                                            return null;
                                        })
                                        }
                                    </ListGroup>
                                }
                                {this.state.planets.filter(planet => planet.isFavourite).length < 1 &&
                                <div>No favourites added</div>
                                }   
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>



            </div>
        );
    }

}

export default Planets;