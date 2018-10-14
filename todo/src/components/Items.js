import React, { Component } from "react";

class Items extends Component {

    constructor(props) {
        super(props);
        this.onClickRemoveButton = this.onClickRemoveButton.bind(this);
        this.onClickUpdateButton = this.onClickUpdateButton.bind(this);
        this.onClickAddButton = this.onClickAddButton.bind(this);
    }

    onClickRemoveButton() {
        this.props.onDeleteItem(this.props.itemId);
    }

    onClickAddButton(){
       
    }

    onClickUpdateButton(){
        this.props.onUpdateItem(this.props.item, this.props.itemId);
    }

    render() {
        
        return(
            <div>
                {/* { */}
                    {/* val === undefined ? <button>추가</button> : <button onClick={this.onClickRemoveButton}>삭제</button> */}
                {/* } */}
                <input type="text" value={this.props.item} className={this.props.test} />
                <button onClick={this.onClickAddButton}>추가</button>
                <button onClick={this.onClickRemoveButton}>삭제</button>
                <button onClick={this.onClickUpdateButton}>수정</button>
            </div>
        );
    }
}

export default Items;