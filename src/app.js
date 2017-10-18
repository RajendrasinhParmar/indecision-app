console.log("Jay Mataji");

var template = (
	<div>
		<h1>Hello This is React App with JSX</h1>
		<p>test</p>
		<ol>
			<li>Item 1</li>
			<li>Item 2</li>
		</ol>
	</div>
);

var templateTwo = (
	<div>
		<h1>Rajendrasinh Parmar</h1>
		<p>Age: 27</p>
		<p>Location: Vadodara</p>
	</div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);