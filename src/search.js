import React from 'react'
import ReactDOM from 'react-dom'
import './search.less'
import img from './img/yuhu.jpg'
class Search extends React.Component{
    render() {
        console.log(123321)
        return <div className="search-text">Search Text12311哎哟我
            {/*<img style={{width: '800px'}} src={img} alt=""/>*/}
        </div>
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
)