import { Link } from "react-router-dom";

export const AppNav = () => {
    return (
        <>
            <Link to="/">
                <div className="App-header">
                    <span className="bump">STAR</span>
                    <h3>PLANETARY 🪐 SYSTEM</h3>
                    <span className="bump">WARS</span>
                </div>
            </Link>
        </>
    )
}