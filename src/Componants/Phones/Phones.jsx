import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Phones = () => {

    const [phones, setPhonse] = useState([]);

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhonse(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phoneWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj
                })
                console.log(phoneWithFakeData);
                setPhonse(phoneWithFakeData)
            });

    }, [])

    return (
        <div>
            <h2 className="text-4xl">Phones: {phones.length}</h2>
            <BarChart width={1300} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                {/* <Cell></Cell> */}
                <Legend></Legend>
                <ResponsiveContainer></ResponsiveContainer>
            </BarChart>
        </div>
    );
};

export default Phones;