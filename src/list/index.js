import React from 'react'
import ReactDOM from "react-dom";
const arr = ['james', 'joe', 'harris']
class List extends React.Component {
    render() {
        return <ul>{arr.map(item => (<li>{item}</li>))}</ul>
    }
}
ReactDOM.render(
    <List/>,
    document.getElementById('app')
)


export default List
