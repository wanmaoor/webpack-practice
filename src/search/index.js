import React from 'react'
import ReactDOM from 'react-dom'
import './search.less'
import {a} from './treeshaking'


class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            Text: undefined
        }
    }

    loadComponent(){
        import('./split-code').then(Component => {
            this.setState({Text: Component.default})
        })
    }
    render() {
        const {Text} = this.state
        const str = a()
        return (<div className="search-text">
            Search Text12311哎哟我
            {str}
            <button onClick={this.loadComponent.bind(this)}>点击加载组件</button>
            {Text ? <Text /> : null}
            {/*<img style={{width: '800px'}} src={img} alt=""/>*/}
        </div>)
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
)
