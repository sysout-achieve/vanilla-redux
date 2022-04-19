import React from "react";
import {connect} from "react-redux";

function Detail({toDo}) {
    console.log("text!!"+toDo?.text)
    return <>
        <h1>
            Detail
        </h1>
        <div>{toDo?.text}</div>
        <div>Created at: {toDo?.id}</div>
    </>

}

function mapStateToProps(state, ownProps) {
    const {
        match: {
            params: {id}
        }
    } = ownProps;
    return {toDo: state.find(toDo => toDo.id === parseInt(id))};
}

export default connect(mapStateToProps)(Detail);
