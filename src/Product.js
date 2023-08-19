import react, { useEffect } from "react"
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid } from "@mui/material"

import { styled } from '@mui/material/styles';
import ProductNav from "./ProductNav";
// import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import axios from "axios"
function Product() {
    const [data, setData] = react.useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((res) => {
            let myarr = res.data;
            setData([...myarr])

        }).catch((e) => {
            console.log("error occured", e)
        })

    }, [])
    return (
        <>
            <ProductNav title="Product Details" />
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
                    style={{ backgroundColor: "lightblue", paddingRight: "0.3rem", paddingBottom: "0.3rem", marginTop: "3px" }}




                >
                    {data.map((ele) => {
                        return (
                            <>
                                <Grid item xs={4}>

                                    <Card sx={{ minWidth: 275 }} >
                                        <CardContent>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                <b>Id :</b> {ele.id}
                                            </Typography>
                                            <Typography variant="h5" component="div">

                                                Title :{ele.title}
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                Price {ele.price}
                                            </Typography>
                                            <Typography variant="body2">
                                                {ele.description}

                                                <br />

                                            </Typography>
                                        </CardContent>

                                    </Card>





                                    {/* <h2>Price{ele.price}</h2>
                                <h5>id{ele.id}</h5> */}

                                </Grid>
                            </>)
                    })}
                </Grid >
            </Container>
        </>
    )


}
export default Product;