const parent = React.createElement("div", {id:'parent'}, 
    React.createElement("div", {id:'child'},
        [React.createElement("h1", {id:'heading'},"hello")],
        [React.createElement("h2", {id:'heading'},"hello 2")]
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);