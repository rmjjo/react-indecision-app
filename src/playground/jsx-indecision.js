
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderInputItems();
};

const clearItem = () => {
    app.options = [];
    renderInputItems();
};

var appRoot = document.getElementById("app");


const renderInputItems = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Herer are your options" : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={clearItem}>Remove All</button>
            <ol>
            {
                app.options.map((option) => {
                    return <li key={option}>{option}</li>;
                    //<p key{option}>Option: {option}</p>;
                })
}
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}


renderInputItems();



