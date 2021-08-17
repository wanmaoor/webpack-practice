import React from 'react'
import ReactDOM from 'react-dom'
import './search.less'
import List from "../list";

class Index extends React.Component {
    render() {
        return (<div className="search-text">
            Search Text12311哎哟我
            {/*<img style={{width: '800px'}} src={img} alt=""/>*/}
            <List />
        </div>)
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
)
