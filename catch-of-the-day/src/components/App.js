import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
    state = {
        fishes: {},
        order: {},
    };
    addFish = fish => {
        // to update state, never want to update it directly
        // first: take a copy of the existing state
        const fishes = {...this.state.fishes};
        // second: add new fish to fishes
        fishes[`fish${Date.now()}`] = fish;
        // third: set new fishes object to state
        this.setState({ fishes: fishes, });
    };
    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes });
    };
    render() {
        return (
            <div className={"catch-of-the-day"}>
                <div className={"menu"}>
                    <Header tagline={'Fresh Seafood Market'} />
                    <ul className={'fishes'}>
                        {/*React wants a unique key for each element / object so it can quickly find them.  Now for each fish object in state we render out a fish component passing props to it */}
                        {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]} />)}
                    </ul>
                </div>
                <Order />
                <Inventory
                    addFish={this.addFish}
                    loadSampleFishes={this.loadSampleFishes}
                />
            </div>
        );
    }
}

export default App;
