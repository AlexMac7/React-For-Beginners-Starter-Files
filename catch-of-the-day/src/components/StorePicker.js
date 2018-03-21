import React from 'react';
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
    // //one way to bind an event
    // constructor() {
    //     super(); //required in a constructor, it runs the component being extended first, it needs created first
    //     this.goToStore = this.goToStore.bind(this);
    // }
    // myInput = React.createRef();
    //
    // //every built in React method is in the parent component, 'React.Component". So any events we add on top of the 'parent' component are not bound by default.  So if goToStore wasn't bound, 'this' would be undefined inside of it
    // goToStore(e) {
    //     e.preventDefault();
    //     console.log(this);
    // }

    myInput = React.createRef();

    //a cleaner way to bind the event is instead of declaring a method on the component, we declare a property that is set to an arrow function.  Properties are bound to the instance letting us access 'this'
    goToStore = event => {
        //stops the form from submitting
        event.preventDefault();
        //get text from input
        const storeName = this.myInput.value.value;
        //change page to whatever store they entered
        //doesn't actually refresh the page now when using forward/back in browser.  We just use push state to change the URL.  Router then renders a different component
        this.props.history.push(`/store/${storeName}`)
    }
    render() {
        return (
            //form submitting resets a page. Since we aren't handling it server side, but with javascript, we need to prevent this, 'event.preventDefault()'
            <form className={'store-selector'} onSubmit={this.goToStore}>
                <h2> Please Enter A Store </h2>
                <input
                    type={'text'}
                    //can use ref (instead of state) to reference a DOM node
                    ref={this.myInput}
                    required
                    placeholder={'Store Name'}
                    defaultValue={getFunName()}/>
                <button type={'submit'}> Visit Store -></button>
            </form>
            // only one element can be return in a render method. A parent element can have as many children as you like though. No sibling elements
            // so for example, with Grid, you'd use <React.Fragment></React.Fragment> and wrap all the elements with it.  The fragment tag renders out to nothing, nothing will show for it. Now you can have sibling elements.
        );
    }
}

export default StorePicker;
