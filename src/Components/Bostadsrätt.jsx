import { useState } from 'react';

function Bostadsratt() {

    const [Bostadsratt, setBostadsratt] = useState({
        value: 0,
        down: 0,
        int: 0,
        water: 0,
        electric: 0,
        trash: 0,
        heat: 0,
        years: 0,
    })


    function handleChange(event) {
        setBostadsratt(prevbostadsratt => {
            return {
                ...prevbostadsratt,
                [event.target.id]: event.target.value
            }
        })
    }

    function getMinValue() {
        return (Bostadsratt.value * 0.15);
    }

    function calcMonth() {

        var finalValue = parseInt(Bostadsratt.value) - parseInt(Bostadsratt.down);

        var totalRentCost = ((parseInt(Bostadsratt.int)/100) + 1) ** parseInt(Bostadsratt.years);

        finalValue = finalValue * totalRentCost;

        var MonthlyCosts = (parseInt(Bostadsratt.electric) + parseInt(Bostadsratt.heat) + parseInt(Bostadsratt.water) + parseInt(Bostadsratt.trash)) * (parseInt(Bostadsratt.years)*12);

        finalValue= finalValue + MonthlyCosts;

        return Math.round(finalValue/(parseInt(Bostadsratt.years*12)));


    }


    return (
        <div>

            <p name="value" >Price: {Bostadsratt.value}kr</p>
            <input id="value" type="range" min={0} max={20000000} defaultValue={0} step={25000} onChange={handleChange} />

            <p name="down" >Downpayment: {Bostadsratt.down}kr</p>
            <input id="down" type="range" min={getMinValue()} max={5000000} defaultValue={getMinValue()} step={10000} onChange={handleChange} />

            <p name="int" >Loan Interest: {Bostadsratt.int}%</p>
            <input id="int" type="range" min={0} max={15} defaultValue={0} step={0.1} onChange={handleChange} />

            <p name="water" >Water: {Bostadsratt.water}kr</p>
            <input id="water" type="range" min={0} max={1200} defaultValue={400} step={100} onChange={handleChange} />

            <p name="electric" >Electricity: {Bostadsratt.electric}kr</p>
            <input id="electric" type="range" min={0} max={2500} defaultValue={400} step={100} onChange={handleChange} />

            <p name="trash" >Trash: {Bostadsratt.trash}kr</p>
            <input id="trash" type="range" min={0} max={1300} defaultValue={500} step={50} onChange={handleChange} />

            <p name="heat" >Heat: {Bostadsratt.heat}kr</p>
            <input id="heat" type="range" min={0} max={2500} defaultValue={1400} step={100} onChange={handleChange} />

            <p name="years" >Mortgage: {Bostadsratt.years} years</p>
            <input id="years" type="range" min={0} max={50} defaultValue={1} step={1} onChange={handleChange} />

            <priceCalculator />

            <div className=" w-[200px] h-[200px] bg-red-500">
                <p> Monthy loan payment: {calcMonth()}kr</p>
            </div>
          

        </div>



    );
}

export default Bostadsratt;
