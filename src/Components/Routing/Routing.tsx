import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			 <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="*" element={<Main/>}/>
            </Routes>
        </div>
    );
}

export default Routing;
