import './App.css';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import Emissions from './Emissions';

function App() {
    return (
        <div>
            <Header />
            <Menu />
            <div className="content">
                <Emissions />
                <Footer />
            </div>
        </div>
    );
}

export default App;
