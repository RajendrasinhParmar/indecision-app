console.log("Jay Mataji");

var app = {
	title : "Indecision App",
	subtitle : "This is subtitle of indecision app"
}

var template = (
	<div>
		<h1>{app.title}</h1>
		<p>{app.subtitle}</p>
		<ol>
			<li>Item 1</li>
			<li>Item 2</li>
		</ol>
	</div>
);

var user = {
	name : "Rajendrasinh Parmar",
	age : 26,
	location : "Vadodara"
}
var templateTwo = (
	<div>
		<h1>{user.name}</h1>
		<p>Age: {user.age}</p>
		<p>Location: {user.location}</p>
	</div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);