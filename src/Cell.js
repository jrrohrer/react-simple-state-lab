import React from 'react'

class Cell extends React.Component {
  state = {
    color: this.props.value
  }

  handleClick = () => {
    this.setState({
      color: '#333'
    })
  }

  render() {
    return (
      <div className="cell" onClick={this.handleClick} style={{backgroundColor: this.state.color}}>

      </div>
    )
  }
}

export default Cell;