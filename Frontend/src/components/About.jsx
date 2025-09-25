function About(){
    return (
        <>
            <header>
                <h1>University Affiliation management</h1>
            <div className="right">
                    <button className="nav-option">Home</button>
                    <button className="nav-option">About</button>
                    <button className="nav-option">Contact Us</button>
                    <button>Login</button>
                </div>
            </header>
            <main>
                <h1>About Us</h1>
                <div className="top">
                    This mainly consists of 
                    <ul>
                        <li>License application for new course at collages.</li>
                        <li>Upgrading license of an existing course at a certain collage.</li>
                    </ul>
                </div>
            </main>
            <footer>
                &copy; 2025 University Affiliation Management
            </footer>
        </>
    );
}
export default About;