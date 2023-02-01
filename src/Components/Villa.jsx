import { useState } from 'react';

function Villa() {

    const [Villa, setVilla] = useState({
        value: "0",
        down: "0",
        int: "0",
        fee: "0",
        misc: "0",
        years: "0",
    })


    function handleChange(event) {
        setVilla(prevFormData => {
            return {
                ...prevFormData,
                [event.target.id]: event.target.value
            }
        })
    }

    function getMinValue() {
        return (Villa.value * 0.15);
    }
    
    function calcMonth() {

        var finalValue = parseInt(Villa.value) - parseInt(Villa.down);

        var totalRentCost = ((parseInt(Villa.int)/100) + 1) ** parseInt(Villa.years);

        finalValue = finalValue * totalRentCost;

        var MonthlyCosts = (parseInt(Villa.fee) + parseInt(Villa.misc)) * (parseInt(Villa.years)*12);

        finalValue= finalValue + MonthlyCosts;

        return Math.round(finalValue/(parseInt(Villa.years*12)));


    }


    return (
        <div>

            <p>Price: {Villa.value}kr</p>
            <input id="value" type="range" min={0} max={20000000} defaultValue={0} step={25000} onChange={handleChange} />

            <p>Downpayment: {Villa.down}kr</p>
            <input id="down" type="range" min={getMinValue()} max={5000000} defaultValue={getMinValue()} step={10000} onChange={handleChange} />

            <p>Loan Interest: {Villa.int}%</p>
            <input id="int" type="range" min={0} max={15} defaultValue={0} step={0.1} onChange={handleChange} />

            <p>Fee: {Villa.fee}kr</p>
            <input id="fee" type="range" min={0} max={5000} defaultValue={1500} step={100} onChange={handleChange} />

            <p>Misc: {Villa.misc}kr</p>
            <input id="misc" type="range" min={0} max={3500} defaultValue={1300} step={100} onChange={handleChange} />

            <p>Years: {Villa.years} years</p>
            <input id="years" type="range" min={1} max={50} defaultValue={1} step={1} onChange={handleChange} />

            <div className=" w-[200px] h-[200px] bg-red-500">
                <p> Monthy loan payment: {calcMonth()}kr</p>
            </div>

        </div>


    );
}

export default Villa;
