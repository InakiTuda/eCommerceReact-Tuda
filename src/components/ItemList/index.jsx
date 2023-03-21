import Item from "../Item";
import React from "react";

const ItemList = ({item}) => {

    return(
        <div className="row" id="itemdetail">
            {
          item.map(item => 
            <div className="col-md-3" key={item.id}>
                <Item  item={item} />
            </div>
            )
       }
        </div>
    )
}

export default ItemList;
