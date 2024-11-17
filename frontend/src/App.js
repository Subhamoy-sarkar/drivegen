import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from './components/chart.js';

const App = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // For loading state

    // Function to fetch data from the backend
    const fetchData = async () => {
        try {
            const response = await axios.get('/api/driverData'); // Use relative path
            const formattedData = response.data.map((item, index) => ({
                time: index + 1,
                speed: item.speed,
            }));
            setData(formattedData);
            setLoading(false);  // Stop loading once data is fetched
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);  // Stop loading even if there's an error
        }
    };

    // Fetch data initially
    useEffect(() => {
        fetchData();
    }, []);

    // Monitor data for over-speeding
    useEffect(() => {
        if (data.some((entry) => entry.speed > 118)) {
            alert('Warning: Over-speeding detected!');
        }
    }, [data]);

    // Periodically refresh data every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            fetchData();
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    // Show loading message or chart
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="App">
            <h1>Driver Behavior Dashboard</h1>
            <Chart data={data} />
        </div>
    );
};

export default App;
