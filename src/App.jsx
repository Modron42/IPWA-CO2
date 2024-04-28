import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import Emissions from './Emissions';

function App() {
    const [emissions, setEmissions] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/emissions?Sector=Industrial%20Combustion&Substance=CO2')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setEmissions(data);
            });
    }, []);    
    return (
        <div>
            <Header />
            <Menu onSelect = {setEmissions} />
            <div className="content">
                <Emissions data = {emissions} />
                <Footer />
            </div>
        </div>
    );
}

export default App;
