console.log("Jay Mataji");

const app = {
	title : "Indecision App",
	subtitle : "This is subtitle of indecision app",
	options: ['One', 'Two']
}

const template = (
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		<p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
		<ol>
			<li>Item 1</li>
			<li>Item 2</li>
		</ol>
	</div>
);

const user = {
	name : "Rajendrasinh Parmar",
	age : 26,
	location : "Vadodara"
}
function getLocation(location){
	if (location) {
		return <p>Location: {location}</p>;
	} else {
		return undefined;
	}
}
const templateTwo = (
	<div>
		<h1>{user.name ? user.name : 'Anonymous'}</h1>
		{ user.age >= 18 && <p>Age: {user.age}</p>}
		{getLocation(user.location)}
	</div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);