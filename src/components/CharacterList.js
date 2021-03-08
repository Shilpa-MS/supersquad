import React from "react";
import { connect } from "react-redux"; //allows to access data from store from this component, it connects to the store.
import {bindActionCreators} from 'redux';
import {addCharacterById} from '../actions';

const CharacterList = (props) => {
  console.log("Props", props);
  return (
    <React.Fragment>
      <h4>Characters</h4>
      <ul>
        {props.characters.map((character) => {
          return (
            <li key={character.id}>
              <div>{character.name}</div>
              <div onClick={()=>props.addCharacterById(character.id)}>+</div>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  console.log("State", state);
  return { characters: state.characters };
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({addCharacterById},dispatch);
// }

//passing the component we want to connect to redux, to the connect function
export default connect(mapStateToProps, {addCharacterById})(CharacterList);
//we can pass 2 things,state to props- takes redux state and maps to our component as props and dispatch to props to bind the action creators
