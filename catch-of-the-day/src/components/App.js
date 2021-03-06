import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
    state = {
        fishes: {},
        order: {},
    };
    componentDidMount() {
        const { params } = this.props.match;
        // first reinstate our localStorage, because on page refresh the component mounts and updates state which triggers component did update. By reinstating local storage before that we keep our currently stored items
        const localStorageRef = localStorage.getItem(params.storeId);
        if (localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef) });
        }

        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: "fishes"
        });
    }

    componentDidUpdate() {
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addFish = fish => {
        // to update state, never want to update it directly
        // first: take a copy of the existing state
        const fishes = {...this.state.fishes};
        // second: add new fish to fishes
        fishes[`fish${Date.now()}`] = fish;
        // third: set new fishes object to state
        this.setState({ fishes: fishes, });
    };

    updateFish = (key, updatedFish) => {
        //take a copy of current state
        const fishes = { ...this.state.fishes };
        //update that state
        fishes[key] = updatedFish;
        //set that to state
        this.setState({ fishes });
    }
    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes });
    };

    addToOrder = key => {
        //take a copy of state
        const order = {...this.state.order};
        // add item to order or update number if already in order
        // if fish is preset we add one to it, otherwise just add 1
        order[key] = order[key] + 1 || 1;
        // update state object
        this.setState({ order });
    };

    render() {
        return (
            <div className={"catch-of-the-day"}>
                <div className={"menu"}>
                    <Header tagline={'Fresh Seafood Market'} />
                    <ul className={'fishes'}>
                        {/*React wants a unique key for each element / object so it can quickly find them.  Now for each fish object in state we render out a fish component passing props to it */}
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish
                                key={key}
                                index={key}
                                details={this.state.fishes[key]}
                                addToOrder={this.addToOrder}
                            />
                        ))}
                    </ul>
                </div>
                <Order
                    fishes={this.state.fishes}
                    order={this.state.order}
                />
                <Inventory
                    addFish={this.addFish}
                    updateFish={this.updateFish}
                    loadSampleFishes={this.loadSampleFishes}
                    fishes={this.state.fishes}
                />
            </div>
        );
    }
}

export default App;
