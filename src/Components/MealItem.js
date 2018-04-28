import React, { Component } from 'react';
import ServingSelect from './ServingSelect';
import blueEditIcon from '../resources/blue-edit-icon.png';
import checkmarkIcon from '../resources/checkmark-icon.png';

class MealItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    }
  }

  handleEditClick() {
    this.setState(prevState => ({
      editMode: !prevState.editMode
    }));
  }

  handleSaveClick() {
    this.setState(prevState => ({
      editMode: !prevState.editMode
    }));
  }

  handleSizeChange(servingSizeId) {
    alert(servingSizeId);
  }

  render() {

    let icon;
    if(this.state.editMode) {
      icon = (<img src={checkmarkIcon} alt="save" className="MealItem__save" onClick={this.handleSaveClick.bind(this)} />);
    } else {
      icon = (<img src={blueEditIcon} alt="edit" className="MealItem__edit" onClick={this.handleEditClick.bind(this)} />);
    }

    return (
      <div className={'MealItem' + (this.state.editMode ? ' editing' : '')}>
        {icon}
  		  <span className="MealItem__food">
          <span className="MealItem__food--name">{this.props.name}</span>
          <span className="MealItem__food--quantity">
            {this.props.selectedServing.quantity} 
            {' ' + this.props.selectedServing.servingSize.label + (this.props.selectedServing.quantity !== 1 ? 's' : '')}
          </span>
        </span>
        <span className="MealItem__macros">
          <span className="MealItem__macros--carbs">{this.props.nutritionValues.carbs}</span>
          <span className="MealItem__macros--fat">{this.props.nutritionValues.fat}</span>
          <span className="MealItem__macros--protein">{this.props.nutritionValues.protein}</span>
        </span>
        <span className="MealItem__calories">{this.props.nutritionValues.calories}</span>
        <div className="clearfix"></div>
        {this.state.editMode && 
          <ServingSelect 
            selectedServing={this.props.selectedServing}
            servingSizes={this.props.servingSizes} 
            handleSizeChange={this.handleSizeChange.bind(this)}
          />}
      </div>
    );
  }
}

export default MealItem;
