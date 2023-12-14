import React from "react";
import { useNavigate } from 'react-router-dom';

const SearchSelector = () => {
    const navigate = useNavigate();

    const handleSelect = (e) => {
        const query = e.target.value;
        if (query === "select") {
            return;
        }
        navigate(`/?query=${query}`);
    }

    return (
        <div>
            <select onChange={handleSelect}>
                <option value='select'>Select your news</option>
                <option value='reactjs'>React</option>
                <option value='angular'>Angular</option>
                <option value='vuejs'>Vue.js</option>
            </select>
        </div>
    );
};

export default SearchSelector;
