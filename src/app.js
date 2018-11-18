class IndecisionsApp extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options :[]
            }
    }

    handleDeleteOptions() {
        this.setState(()=>{
            return {
                options : []
            };
        });
    }
    
    handleAddOptions(option){
        if(!option)
            return 'Enter valid value to add item';
        else if(this.state.options.indexOf(option.trim()) >= 0)
        {
           return 'This option already exists';
        }
        this.setState((prevState)=>{     
            return {
                options : prevState.options.concat([option])
            };
        });
    }

     handlePick(){
         const randomNum = Math.floor(Math.random() * this.state.options.length);
         const option = this.state.options[randomNum];
    
         alert(option);
     }

    render(){
        const title = 'Indecision';
        const subTitle = 'Put your life in the hands of a computer.'
        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0 ? true : false}
                    handlePick={this.handlePick} />
                <Options 
                    optionSelections={this.state.options}
                    handleDeleteOptions ={this.handleDeleteOptions}
                />
                <AddOption handleAddOption={this.handleAddOptions} />
            </div>
        );
    }
}

const Header = (props) => {  
    return (
         <div>
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
        </div>
    );
    
}

const Action = (props) => {
    return (
        <div>
            <button 
            onClick={props.handlePick} 
            disabled ={!props.hasOptions}>What should i do?</button>
        </div>
    ); 
}


const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
             {
                 props.optionSelections.map((option)=><Option key={option} optionText={option}/>)
            }
        </div>
    );
    
}


const Option = (props) => {
   return (
         <div>
            {props.optionText}    
        </div>
    );  
}


class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error : undefined
        }
    }

    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(()=>{
            return {
                error : error
            };
        });

        e.target.elements.option.value = '';
    
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add option</button>
                </form>
            </div>

        );
    }
};

// const User = (props) => {
//   return (
//     <div>
//         <p>Name : {props.name}</p>
//         <p>Age : {props.age} </p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionsApp/>,document.getElementById('app'));