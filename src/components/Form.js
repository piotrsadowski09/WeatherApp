import React from 'react';


class Form extends React.Component {


    render() {
        return (
            <div className={"module"}>
                <h2>Find Your City</h2>
                <form className={"find-city"} onSubmit={this.props.getWeather}>
                    <input type="text" name="city" placeholder="City"/>
                    <input type="text" name="country" placeholder="Country (ISO 3166-1 examples: PL,US,UK)"/>
                    <button><i className="material-icons">search</i></button>
                </form>
            </div>
        )
    }
}

export default Form;