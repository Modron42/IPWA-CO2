import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import Emissions from './Emissions';

function App() {
    const [sector, setSector] = useState('Agriculture');
    const [year, setYear] = useState(2022);
    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState(true);
    const [order, setOrder] = useState(true);
    const [emissions, setEmissions] = useState([]);

    useEffect(() => {
        console.log(sector, sort, year);
        fetch(`http://localhost:3001/emissions?Substance=CO2&Sector=${encodeURIComponent(sector)}&_sort=${sort ? 'Country' : year}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setEmissions(data);
            });
    }, [sector, sort, year]);

    return (
        <div>
            <Header />
            <Menu
                year={year}
                onSelectSector={setSector}
                onSelectYear={setYear}
                onSelectFilter={setFilter}
                onSelectSort={setSort}
                onSelectOrder={setOrder} />
            <div className="content">
                <Emissions
                    id="emissions"
                    sector={sector}
                    data={emissions}
                    year={year}
                    filter={filter}
                    order={order} />
                <hr />
                <Footer />
            </div>
        </div>
    );
}

export default App;
