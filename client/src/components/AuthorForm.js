import React from 'react';

export default props => {
    const {name, setName, onSubmitProp} = props;
    return (
        <form onSubmit={onSubmitProp}>
            <p>
                <label>Name</label><br/>
                <input 
                    type="text" 
                    name="name" value={name} 
                    onChange={(e) => { setName(e.target.value) }}/>
            </p>
            <input type="submit" value="Submit"/>
        </form>
    )
}

