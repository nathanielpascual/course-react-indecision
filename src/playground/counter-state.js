

class Counter extends React.Component{

    constructor(){
        super();
        this.addOne = this.addOne.bind(this);
        this.subractOne = this.subractOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count : 0
        }


    }

    addOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count + 1
            };
         });
    }

    subractOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count - 1
            };
         });
    }

    reset(){
        this.setState(()=>{
            return {
                count: 0
            };
         });
    }
    render(){
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button> 
                <button onClick={this.subractOne}>-1</button>
                <button onClick={this.reset}>reset</button>

            </div>
        );
    }
}

const appRoot = document.getElementById('app');


ReactDOM.render(<Counter/>,appRoot);