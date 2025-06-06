import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart, FaSignInAlt, FaUserTag } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';


function Header({ onNameSearch, onCatgeorySearch, onSort }) {

    const categoryList = ["Jewellery", "Men's Clothing ", "Electronics", "Women's Clothing"]
    const [categories, setCategories] = useState(categoryList)
    const [productName, setProductName] = useState('');
    const [sortType, setSortType] = useState('');

    const handleSearchProductName = () => {
        onNameSearch(productName);
    };

    const handleSearchProductCategory = (productCategory) => {
        onCatgeorySearch(productCategory)
    }

    const handleSorting = (e) => {
        const type = e.target.value;
        setSortType(type);
        onSort(type);
    }

    return (
        <>
            <Navbar className="d-flex justify-content-between px-4 border-bottom">
                <div><img src="/logo.jpg" alt="Logo" height="70" /></div>
                <div className="input-group w-50">
                    <input type="text" className="form-control" placeholder="Search products..." value={productName} onChange={(e) => setProductName(e.target.value)} />
                    <button className="btn btn-outline-secondary" type="button" onClick={handleSearchProductName}>Search</button>
                </div>
                <Nav className="px-4">
                    <Nav.Link href="#" className='fw-semibold'><FaSignInAlt size={15} className='mx-1' />Login</Nav.Link>
                    <Nav.Link href="#" className='fw-semibold'><FaShoppingCart size={15} className='mx-1' />Cart</Nav.Link>
                    <Nav.Link href="#" className='fw-semibold'><FaUserTag size={15} className='mx-1' />Become a seller</Nav.Link>
                </Nav>
            </Navbar>

            <Navbar collapseOnSelect expand="lg" bg="primary" data-bs-theme="dark" className="d-flex justify-content-between px-4 ">
                <Nav className="me-auto px-5">
                    {categories.map((category, index) => {
                        return (
                            <Nav.Link href="#" className="px-5 text-white" key={index} onClick={() => handleSearchProductCategory(category)}>{category}</Nav.Link>
                        )
                    })
                    }
                    <Nav.Link href="#" className="px-5 text-white" onClick={() => handleSearchProductCategory('Home & Furniture')}>Home & Furniture</Nav.Link>
                    <Nav.Link href="#" className="px-5 text-white" onClick={() => handleSearchProductCategory('Appliances')}>Appliances</Nav.Link>
                </Nav>
            </Navbar>

            <div className="clearfix mb-3">
                <select className="form-select form-select-sm float-end mt-3" style={{ width: '160px', marginRight: '8rem' }} value={sortType} onChange={handleSorting}>
                    <option value="">------ Sort By -------</option>
                    <option value="low-high">Price (Low - High)</option>
                    <option value="high-low">Price (High - Low)</option>
                    <option value="rating">Rating</option>
                </select>
            </div>

        </>

    )

}

export default Header;