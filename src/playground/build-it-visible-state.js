class ToggleVisibility extends React.Component{

    constructor(props){
        super(props);
        this.onVisibility = this.onVisibility.bind(this);
        this.state = {
            title : 'Visibility Toggle',
            subtitle : 'Display hidden message',
            visible : false
        }
    }

    onVisibility(e){
        e.preventDefault;
        this.setState((prevState)=>{
            return {
                visible : !prevState.visible
            };
        });
    };
    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.onVisibility}>{this.state.visible ? 'Hide details' : 'Show details'}</button>
                {this.state.visible && (
                    <div>
                        <p>{this.state.subtitle}</p>
                    </div>
                )}
            </div>
        );
    }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<ToggleVisibility/>,appRoot);
