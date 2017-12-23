class IndecisionApp extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Action />
				<Options />
				<AddOptions />
			</div>
		)
	}
}
class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>Indecision</h1>
				<h2>Put you life in the hands of a computer</h2>
			</div>
		)
	}
}

class Action extends React.Component {
	render() {
		return (
			<div>
				<button>What should i do?</button>
			</div>
		)
	}
}

class Options extends React.Component {
	render() {
		return (
			<div>
				Options component come here
				<Option />
			</div>
		)
	}
}

class Option extends React.Component {
	render() {
		return (
			<div>
				Option Component
			</div>
		)
	}
}

class AddOptions extends React.Component {
	render() {
		return (
			<div>
				Add Options component here
			</div>
		)
	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));