/**
 * Created By brand On 2018/1/20
 */
import React, {PureComponent} from 'react';
const hljs = window.hljs

class CodeBlock extends PureComponent {
    constructor(props) {
        super(props)
        this.setRef = this.setRef.bind(this)
    }

    componentDidMount() {
        this.highlightCode()
    }
    setRef(el) {
        this.codeEl = el
    }
    componentDidUpdate() {
        this.highlightCode()
    }

    highlightCode() {
        hljs.highlightBlock(this.codeEl)
    }

    render() {
        return (
            <pre>
        <code ref={this.setRef} className={this.props.language}>
          {this.props.value}
        </code>
      </pre>
        )
    }
}


export default CodeBlock;