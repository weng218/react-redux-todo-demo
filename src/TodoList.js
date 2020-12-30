import React from 'react';
import { connect } from 'react-redux'

//presentational component 
const TodoList = (props) => {
	const { list, inputValue, changeInputValue, handleDelete, handleClick } = props;
		return (
			<div>
				<div>
					<input value={inputValue} onChange={changeInputValue}/>
					<button onClick = {handleClick}> SUBMIT</button>
				</div>
				<ul>
					{
						list.map((item, index) => {
							return <li onClick={handleDelete} key = {index}>{item}</li>
						})
					}
				</ul>

			</div>
		)

}

const mapStateToProps = (state) => {
	return {
		inputValue: state.inputValue,
		list: state.list
	}
}

//store.dispatch -> props
const mapDispatchToProps = (dispatch) => {
	return {
		changeInputValue(e) {
			const action = {
				type: 'change_input_value',
				value: e.target.value
			}
			dispatch(action);
			
		},
		handleClick() {
			const action = {
				type: 'add_item'
			};
			dispatch(action);
		},

		handleDelete() {

		}

	}
}

//connect makes a container component
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);