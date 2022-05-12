import React, { useState } from "react";
import CardComponent from "../Card/card";
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './home.css';
function HomePage() {
    const Products = [
        {
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7fcgofSUIyERUBKvlJAgSeRRyhV32IMC3eA&usqp=CAU",
            title: "Fancy Product",
            price: "$40.00 - $80.00",
            // isAdded: true
            buttonName: "View options"
        },
        {
            imgUrl: "https://kimssports.com/pub/media/catalog/product/cache/d3c0ab35b33e1cc4d2894ee253beb5dd/m/o/mooto-poomsae-uniform-keychain.jpg",
            title: "Special Item",
            imgRatingUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv5itORkpWlAOHIUUkUjoD0zSn0tj3mvCyRRGQ2aeqmo0rosg2RR4ytOphMaf35uACF6A&usqp=CAU",
            discount: "$20.00",
            price: " - $18.00",
            // isAdded: false
            buttonName: "Add to cart"
        },
        {
            imgUrl: "https://thepinkmillennial.ca/wp-content/uploads/2017/09/The-Body-Shop-1-1024x804.jpg",
            title: "Sale Item",
            discount: "$50.00",
            price: " - $25.00",
            // isAdded: false
            buttonName: "Add to cart"
        },
        {
            imgUrl: "https://rukminim1.flixcart.com/image/400/400/remote-control-toy/h/n/a/ben-10-rechargeable-stunt-remote-car-with-sparkling-led-lights-original-imaer35yakrm2fmy.jpeg?q=90",
            title: "Popular Item",
            rating: 5,
            price: "$40.00",
            // isAdded: true
            buttonName: "Add to cart"           
        },
        {
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdbvu5abgEq0_DMtuJxckgh8f5q6SyHV04BA&usqp=CAU",
            title: "Sale Item",
            discount: "$50.00",
            price: " - $25.00",
            // isAdded: false
            buttonName: "Add to cart"
        },
        {
            imgUrl: "https://5.imimg.com/data5/SELLER/Default/2021/5/MD/NE/CE/1477288/fancy-paper-bag-500x500.jpg",
            title: "Fancy Product",
            price: "$120.00 - $280.00",
            // isAdded: true
            buttonName: "View options"
        },
        {
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO42pEikj43V2cuwS76jMvVCMyL29Y8xgPlQ&usqp=CAU",
            title: "Special Item",
            rating: 5,
            discount: "$20.00",
            price: " - $18.00",
            // isAdded: false
            buttonName: "Add to cart"
        },
        {
            imgUrl: "https://www.thepackagingpro.com/media/goods/images/factory-price-wholesale-environmental-friendly-paper-bag-customized-design-colourful-product-shopping-bag_82XGBIr.jpg",
            title: "Popular Item",
            rating: 5,
            price: "$40.00",
            // isAdded: true
            buttonName: "Add to cart"
        }
    ]
    const [productList, setProductList] = useState(Products);
    const handleProducts = (i) => {
        // setProductList([...productList, {...productList[i], isAdded:false}])
        console.log([...productList, {...productList[i], isAdded:false}], ': Changed...')
    }
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <NavDropdown title="Shop" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">All Products</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">Popular Items</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">New Arrivals</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Button variant="outline-dark" className="cart"><ShoppingCartIcon />&nbsp;Cart <span className='count'>0</span></Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="title">
                <h2 className="shopin">Shop in style</h2>
                <h5 className="shoppin">With this shop hompeage template</h5>
            </div>

            <div>

                <CardComponent productList={productList} handleProducts={handleProducts} />

            </div>
            <div className="footer">
                <p class='last'>Copyright © Your Website 2022</p>

            </div>
        </>
    )
}

export default HomePage;