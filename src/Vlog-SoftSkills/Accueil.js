import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Update from "./update";
import Images from "./Images";
import SlideshowWithImages from "./Images";
import Ajoute from "./Ajoute";

export default function Vlog(){

    return(
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/ajoute" element={<Ajoute />}/>
                    <Route path="/update/:id" element={<Update />}/>
                    <Route path="/images/:images" element={<SlideshowWithImages />}/>
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}