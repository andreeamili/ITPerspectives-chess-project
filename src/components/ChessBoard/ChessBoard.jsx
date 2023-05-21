import React from "react";
import './ChessBoard.css'
import ChessPieces from "../ChessPieces/ChessPieces";

function ChessBoard() {
    const rows = Array.from(Array(8).keys());
    const columns = Array.from(Array(10).keys());
    const letters = ['A', 'B', 'C', 'D', 'E', 'F','G','H'];

    

    return (
        <div class="chessboard">
            {
                columns.map((column) => (
                    <div className="column" key={column}>
                        {column === 0 || column === 9?(
                             <><div class="corner black  margin-right margin-left"></div>
                             {rows.map((row) =>
                                 <>
                                     <div class={column == 0 ?"square-margin black color-white margin-right" : "square-margin black color-white rotate margin-left"}>{row+1}</div>
                                 </>
                             )}
                             <div class="corner black margin-left margin-right"></div>
                         </>
                        ):(<>
                            {column % 2 === 0 ? (
                                <><div class="square-top black color-white rotate margin-bottom">{letters[8-column ]}</div>
                                    {rows.map((row) =>
                                        <>
                                            <div class={row % 2 === 0 ? "square black " : "square white"}></div>
                                        </>
                                    )}
                                    <div class="square-top black color-white margin-top">{letters[8-column ]}</div>
                                </>
                            ) : (
                                <><div class="square-top black color-white rotate margin-bottom">{letters[8-column ]}</div>
                                    {rows.map((row) =>
                                        <>
                                            <div class={row % 2 === 0 ? "square white" : "square black"}></div>
                                        </>
                                    )}
                                    <div class="square-top black color-white margin-top">{letters[8-column ]}</div>
                                </>
                            )}</>
                        )}
                    </div>
                ))}
                <ChessPieces />
        </div>
    );
}
export default ChessBoard
