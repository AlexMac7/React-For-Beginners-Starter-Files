import React from 'react';

class StorePicker extends React.Component
{
    render() {
        return (
            <form className={'store-selector'}>
                <h2> Please Enter A Store </h2>
                <input type={'text'} required placeholder={'Store Name'}/>
                <button type={'submit'}> Visit Store -></button>
            </form>
            // only one element can be return in a render method. A parent element can have as many children as you like though. No sibling elements
            // so for example, with Grid, you'd use <React.Fragment></React.Fragment> and wrap all the elements with it.  The fragment tag renders out to nothing, nothing will show for it. Now you can have sibling elements.
        );
    }
}

export default StorePicker;
