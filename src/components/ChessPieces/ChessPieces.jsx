import React, {useState} from "react";
import './ChessPieces.css'
import pawn from '../ChessPieces/picesPictures/pawn.png'
import horse from './picesPictures/horse.png'
import rook from './picesPictures/rook.png'
import king from './picesPictures/king.png'
import qween from './picesPictures/qween.png'
import bishop from './picesPictures/bishop.png'
import invisible from './picesPictures/invisible-block.png'
import Draggable from "react-draggable";


function ChessPieces() {
    
    const imagesLineOne = [
        { id: 1, src: rook, alt: "rook" },
        { id: 2, src: horse, alt: "horse" },
        { id: 3, src: bishop, alt: "rook" },
        { id: 4, src: king, alt: "rook" },
        { id: 5, src: qween, alt: "rook" },
        { id: 6, src: bishop, alt: "rook" },
        { id: 7, src: horse, alt: "horse" },
        { id: 8, src: rook, alt: "rook" },

    ];
    const imagesLineTwo = [
        { id: 1, src: pawn, alt: "pawn" },
        { id: 2, src: pawn, alt: "pawn" },
        { id: 3, src: pawn, alt: "pawn" },
        { id: 4, src: pawn, alt: "pawn" },
        { id: 5, src: pawn, alt: "pawn" },
        { id: 6, src: pawn, alt: "pawn" },
        { id: 7, src: pawn, alt: "pawn" },
        { id: 8, src: pawn, alt: "pawn" },
    ];
    const imagesSpace = [
        { id: 1, src: invisible, alt: "pawn" },
        { id: 2, src: invisible, alt: "pawn" },
        { id: 3, src: invisible, alt: "pawn" },
        { id: 4, src: invisible, alt: "pawn" },
        { id: 5, src: invisible, alt: "pawn" },
        { id: 6, src: invisible, alt: "pawn" },
        { id: 7, src: invisible, alt: "pawn" },
        { id: 8, src: invisible, alt: "pawn" },
    ];
    const spaces = Array.from(Array(5).keys());
    return (
        <div className="chess-pieces">
            {imagesLineOne.map((image) => (
                <Draggable>
                <img
                    key={image.id}
                    src={image.src}
                    alt={image.alt}
                    style={{ width: "3.5em", height: "3.5em", boxsizing: "border-box", marginLeft: "1.3%", marginRight: "1.3%" }}
                /></Draggable>
            ))}
            {imagesLineTwo.map((image,index) => (
                <Draggable>
                <img
                    key={image.id}
                    src={image.src}
                    alt={image.alt}
                    style={{ width: "3.5em", height: "3.5em", boxsizing: "border-box", margin: "1.3%" }}
                /></Draggable>
            ))}
            {
                spaces.map(() => (
                    <>
                        {imagesSpace.map((image) => (
                            <Draggable>
                <img
                    key={image.id}
                    src={image.src}
                    alt={image.alt}
                    style={{ width: "3.5em", height: "3.5em", boxsizing: "border-box", marginLeft: "1.3%", marginRight: "1.3%" }}
                /></Draggable>
            ))}
                    </>
                ))}

            {imagesLineTwo.map((image) => (
                <Draggable>
                <img
                    key={image.id}
                    src={image.src}
                    alt={image.alt}
                    style={{ width: "3.5em", height: "3.5em", boxsizing: "border-box",margin: "1.3%" ,filter: "invert(100%)" }}
                /></Draggable>
            ))}
            {imagesLineOne.map((image) => (
                <Draggable>
                <img
                    key={image.id}
                    src={image.src}
                    alt={image.alt}
                    style={{ width: "3.5em", height: "3.5em", boxsizing: "border-box", marginLeft: "1.3%", marginRight: "1.3%",filter: "invert(100%)" }}
                /></Draggable>
            ))}

        </div>
    );
}
export default ChessPieces

