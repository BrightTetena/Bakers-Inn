import NavBar from "../src/assets/components/NavBar"
import { Outlet } from "react-router-dom";
import './Index.scss'


export function Layout() {
    return (
        <>
        <NavBar/>
        <main> 
            <Outlet/>
        </main>
      
        
        
        </>
    )
}