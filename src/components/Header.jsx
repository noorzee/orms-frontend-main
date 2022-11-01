import React from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups/src';
import{Navbar, Footer, Sidebar, ThemeSettings} from '../components';
import{Calendar, ColorPicker, Customers, Enquires, Results, Settings, Area, Bar, ColorMapping, Financial, Line, Pie, Stacked, Dashboard, Lecture, Login} from '../pages';
import { useStateContext } from '../contexts/ContextProvider';
import './../App.css';
import { Overview } from '@syncfusion/ej2/diagrams';

const Header = () => {
  
const{activeMenu} = useStateContext();
  return (
    <div>
                <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
                    <TooltipComponent content="Stettings" position="top">
                        <button className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background:'blue', borderRadius:'50%'}}>
                            <FiSettings/>
                        </button>
                    </TooltipComponent>
                </div>
                {activeMenu ? (
                    <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                        <Sidebar />
                    </div>
                ):(
                    <div className='w-0 dark:bg-secondary-dark-bg'>
                        <Sidebar />
                    </div>
                )}
                <div className={
                    `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? ' md:ml-72 ' : 'flex-2 '}` 
                }>
                    <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                    <Navbar />
                    </div>
    </div>
    </div>
  )
}

export default Header