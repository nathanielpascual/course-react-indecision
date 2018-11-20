import React from 'react';
import Header from './Header';
import AddOption from './AddOption';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionsApp extends React.Component{
    state = {
        options : [],
        selectedOption : undefined
    }

    handleDeleteOptions =() => {
        this.setState(()=>({options :[]}));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState)=>(
           { options : prevState.options.filter((option) => optionToRemove !== option)} 
        ));
    };
    
    handleAddOptions = (option) => {
        if(!option)
            return 'Enter valid value to add item';
        else if(this.state.options.indexOf(option.trim()) >= 0)
        {
           return 'This option already exists';
        }
      
        this.setState((prevState)=>({options : prevState.options.concat([option])}));
    };

     handlePick = () => {
         const randomNum = Math.floor(Math.random() * this.state.options.length);
         const option = this.state.options[randomNum];
       
         this.setState(()=>({selectedOption:option}));
     };

     handleClearSelectedOption =()=> {
            this.setState(()=>({selectedOption:undefined}));
     };

    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options =  JSON.parse(json);

            if(options){
                this.setState(()=>({options}));
            }
        }
        catch(e){

        }
    };
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length)
        {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
      
    };
    componentWillUnMount(){
        console.log('component will unmount')
    };

    render(){
        const subTitle = 'Put your life in the hands of a computer.'
        return (
            <div>
                <Header subTitle={subTitle}/>
                <div className="container container__background">
                    <Action 
                        hasOptions={this.state.options.length > 0 ? true : false}
                        handlePick={this.handlePick} />
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions ={this.handleDeleteOptions}
                            handleDeleteOption = {this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOptions} 
                        />
                    </div>
                </div>

                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption = {this.handleClearSelectedOption}
                 />
            </div>
        );
    }
}

export default IndecisionsApp;