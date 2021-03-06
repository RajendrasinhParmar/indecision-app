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
	handlePick() {
		alert('Handle Pick');
	}
	render() {
		return (
			<div>
				<button onClick={this.handlePick}>What should i do?</button>
			</div>
		)
	}
}

class Options extends React.Component {
	constructor(props) {
		super(props);
		this.handleRemoveAll = this.handleRemoveAll.bind(this);
	}
	handleRemoveAll(){
		console.log(this.props.options);
		alert('Handle Remove all');
	}
	render() {
		return (
			<div>
				<button onClick={this.handleRemoveAll}>Remove All</button>
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
	handleAddOption(e){
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		if(option){
			alert('Test');
		}	
	}
	render() {
		return (
			<form onSubmit={this.handleAddOption}>
				<input type="text" name="option"/>
				<button>Add Option</button>
			</form>
		)
	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));