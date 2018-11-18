const app ={
    title : 'Visibility Toggle',
    subtitle : 'Display hidden message'
}

let visible = false;

const onVisibility =(e) => {
    e.preventDefault;
    visible = !visible;
    displayDetails();
};
const appRoot = document.getElementById('app');

const displayDetails =()=>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={onVisibility}>{visible? 'Hide details' : 'Show details'}</button>
            {visible && (
                <div>
                    <p>Display hidden details</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(template,appRoot);
}

displayDetails();
