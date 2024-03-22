import React, { createContext, useState, useEffect } from 'react';
import { fetchAllMovies, fetchAllSeries } from '../services/allMoviesServices';

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [isLoginFormOpen, setIsLoginFormOpen] = useState(false); 

    useEffect(() => {
        fetchAllMovies()
            .then(data => {
                setMovies(data);
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
            });

        fetchAllSeries()
            .then(data => {
                setSeries(data);
            })
            .catch(error => {
                console.error('Error fetching series:', error);
            });
    }, []);

    const openLoginForm = () => {
        setIsLoginFormOpen(true);
    };

    const closeLoginForm = () => {
        setIsLoginFormOpen(false);
    };

    return (
        <DataContext.Provider value={{ movies, series, isLoginFormOpen, openLoginForm, closeLoginForm }}>
            {children}
        </DataContext.Provider>
    );
};
