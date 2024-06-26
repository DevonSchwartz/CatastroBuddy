import React, {useContext, useEffect} from "react";
import AddItemButton from "./AddItemButton"
import ItemBox from "./ItemBox"
import { BoxContext } from "../context-providers/BoxContext";
import {itemNotFound} from "../utils"
import "./css/ItemBoxRenderer.css"

// Render all the ItemBoxes from the current session's state
// TODO: Connect backend REST API call to load items from the DB 
const ItemBoxRenderer = () => {
    const {boxes, items, addBoxes} = useContext(BoxContext);

    // save items to local storage
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items)); 
    }, [items])

    // add boxes if there are more items than boxes
    useEffect(() => {
        if (items.length > boxes.length) {
            addBoxes(items.length - boxes.length)
        }
    }, [items, addBoxes, boxes])



    return (
        <div>
            <h1 className="header">
                Add Your Household Items
            </h1>            
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {boxes.map((box, index) => (
                    <ItemBox
                        key={box.id}
                        boxId={box.id}
                        boxIndex={index}
                        >
                    </ItemBox>
                )
                )}
            </div>
            <div className="addButton">
                <AddItemButton></AddItemButton>
            </div>
        </div>
    )
}

export default ItemBoxRenderer