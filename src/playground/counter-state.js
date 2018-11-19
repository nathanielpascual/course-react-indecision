

class Counter extends React.Component{

    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.subractOne = this.subractOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count : 0
        }
    }

    componentDidMount(){

        const thisCount = localStorage.getItem('count');
        const count = parseInt(thisCount,10);

        if(!isNaN(count)){
            this.setState(()=>({count}))
        }
    }

    componentDidUpdate(prevProps,prevState){
       if(prevProps.count !== this.state.count){
            localStorage.setItem('count',this.state.count)
       }
    }

    addOne(){
        this.setState((prevState)=>({ count: parseInt(prevState.count,10) + 1}));
    }

    subractOne(){
        this.setState((prevState)=>({  count: parseInt(prevState.count,10) - 1}));
    }

    reset(){
        this.setState(()=>({count: 0}));
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


ReactDOM.render(<Counter count={0}/>,appRoot);