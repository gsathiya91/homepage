import React from 'react';
import {
    Box,
    Paper
} from '@mui/material';
import './card.css';
import { Button } from 'react-bootstrap';

export default function CardComponent({ productList, handleProducts }) {
    //   const [state, setState]= useState('')
    console.log(productList)
    return (
        <Box className="box">
            {productList && productList.map((product, index) => (
                <Paper className="paper" key={index}>
                    <div className="top">
                        <img src={product.imgUrl} alt={product.title} />
                    </div>

                    <div className="productname">
                        <h4>{product.title}</h4>
                        <div>
                            <img className="rating" src={product.imgRatingUrl} />
                        </div>

                        <p><span className="discount">{product.discount}</span>{product.price}</p>
                        <div>
                            <Button variant="outline-dark" Id="view">{product.buttonName}</Button>
                        </div>
                        {/* <div>
                            {product.isAdded ? <Button variant="outlined" Id="view"
                                onClick={(index) => handleProducts(index)}>Add to Cart</Button> :
                                <Button variant="outlined" Id="view1"
                                    onClick={(index) => handleProducts(index)}>Remove from Cart</Button>}
                        </div> */}
                    </div>
                </Paper>
            ))}
        </Box>
    );
}
