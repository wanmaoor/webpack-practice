import React from 'react'
import ReactDOM from 'react-dom'
import './search.less'
import img from './img/yuhu.jpg'
class Search extends React.Component{
    render() {
        return <div className="search-text">Search Text12311
            {/*<img style={{width: '800px'}} src={img} alt=""/>*/}
        </div>
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
)