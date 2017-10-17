console.log("Jay Mataji");

// var template = <h1>Hello This is React App with JSX</h1>;
var appRoot = React.createElement(
	'h1',
	{ id: "newId"},
	"This is React App"
);

ReactDOM.render(appRoot, document.getElementById('app'));