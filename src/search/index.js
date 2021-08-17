import React from 'react'
import ReactDOM from 'react-dom'
import './search.less'
import {a} from './treeshaking'

class Index extends React.Component {
    render() {
        const str = a()
        return (<div className="search-text">
            Search Text12311哎哟我
            {str}
            {/*<img style={{width: '800px'}} src={img} alt=""/>*/}
        </div>)
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
)
