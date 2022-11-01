import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups/src';
import{Navbar, Footer, Sidebar, ThemeSettings} from './components';
import{Calendar, ColorPicker, Customers, Enquires, Results, Settings, Area, Bar, ColorMapping, Financial, Line, Pie, Stacked, Dashboard, Lecture, Login,Add_user} from './pages';
import { useStateContext } from './contexts/ContextProvider';
import './App.css';
import { Overview } from '@syncfusion/ej2/diagrams';

//backend call
import { API } from "./backend";

const App = () => {
const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);
  
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
      <div><Routes><Route path='/' element={<Login />} /></Routes></div>
        <div className="flex relative dark:bg-main-dark-bg">
            
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && (<ThemeSettings />)}
                    <Routes>
                        {/* Dashbord */}
                        <Route path='/Dashboard' element={<Dashboard />} />

                        {/* Pages */}
                        <Route path='/Login' element={<Login />} />
                        <Route path='/Lecture' element={<Lecture />} />
                        <Route path='/Results' element={<Results />} />
                        <Route path='/Enquires' element={<Enquires />} />
                        <Route path='/Add Users' element={<Add_user />} />
                        <Route path='/Settings' element={<Settings />} />

                         {/* Apps */}
                        <Route path='/Calendar' element={<Calendar />} />
                        
                        {/* Charts */}
                        <Route path='/Line' element={<Line />} />
                        <Route path='/Area' element={<Area />} />
                        <Route path='/Bar' element={<Bar />} />
                        <Route path='/Pie' element={<Pie />} />
                        <Route path='/Stacked' element={<Stacked />} />
                        <Route path='/Financial' element={<Financial />} />
                        <Route path='/ColorMapping' element={<ColorMapping />} />


                    </Routes>
                </div>
                </div>
            </div>
        </BrowserRouter>
    </div>
  )
}
console.log("API is", API);
export default App