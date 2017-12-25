class IndecisionApp extends React.Component {
	render() {
		const title = 'Indecision App';
		const subtitle = 'Put you life in the hands of a computer'
		const options = ['option one', 'option two', 'option four'];
		return (
			<div>
				<Header title={title} subtitle={subtitle}/>
				<Action />
				<Options options={options}/>
				<AddOptions />
			</div>
		)
	}
}
class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
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
				{
					this.props.options.map( option => <Option key={option} optionText={option}/>)
				}
			</div>
		)
	}
}

class Option extends React.Component {
	render() {
		return (
			<div>
				{this.props.optionText}
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