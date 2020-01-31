import React from "react"

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            displayedNums: [0, 1, 2],
            itemsPerPage: 3,
            indexValue: 0,
            pageNum: 1
        };
    }
    
    toNextPage = () => {
        const numbers = [...this.state.nums];
        this.setState(prevState => ({
                ...prevState,
                pageNum: prevState.pageNum += 1,
                displayedNums: numbers.splice(prevState.indexValue += 3, this.state.itemsPerPage)
        }));
    }

    toPrevPage = () => {
        const numbers = [...this.state.nums];
        this.setState(prevState => ({
            ...prevState,
            pageNum: prevState.pageNum -= 1,
            displayedNums: numbers.splice(prevState.indexValue -= 3, this.state.itemsPerPage)
        }))
    }
    
    render() {
        return (
            <div>
            {this.props.greeting}
            <ul>
                {this.state.displayedNums.map((number, i) => <li key={i}>{number}</li>)}             
            </ul>
            <p>Page {this.state.pageNum}</p>
            <button 
                onClick={this.toPrevPage} 
                style={{display: this.state.nums[this.state.displayedNums[0] - 1] ? "inline-block" : "none"}}
            >
                Previous
            </button>
            <button 
            onClick={this.toNextPage} 
            style={{display: this.state.nums[this.state.displayedNums[0] + 3] ? "inline-block" : "none"}}
            >
                Next
            </button>
            </div>
        );
    }
}

export default Hello