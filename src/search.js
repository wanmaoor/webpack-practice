import React from 'react'
import ReactDOM from 'react-dom'
import './search.less'

class Search extends React.Component {
    render() {
        return (<div className="search-text">
            Search Text12311哎哟我
            {/*<img style={{width: '800px'}} src={img} alt=""/>*/}
        </div>)
    }
}

ReactDOM.render(
    <Search/>,
    document.getElementById('root')
)