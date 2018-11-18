let count = 0;

const add = () => {
    count++;
    renderCounterApp();
} ;
const subract = () => {
    count--;
    if(count < 0)
        count = 0;

    renderCounterApp();
}

const reset = () => {
    count = 0;
    renderCounterApp();
};


const appRoot = document.getElementById('app');


const renderCounterApp=()=>{
    const templateTwo = (
        <div>
            <h1>Count : {count}</h1>
                <button id="add" className="button" onClick={add}>+1</button>
                <button id="subract" className="button" onClick={subract}>-1</button>
                <button id="reset" className="button" onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(templateTwo,appRoot);
};

renderCounterApp();