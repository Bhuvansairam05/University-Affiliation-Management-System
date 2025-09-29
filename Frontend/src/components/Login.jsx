function Login(){
    return(
        <>
            <div className="login-left"></div>
            <div className="login-right">
                <form action="submit">
                    <input type="text" placeholder="Enter Username"/>
                    <input type="text" placeholder="Enter Password" />
                    
                </form>
            </div>
        </>
    )
}
export default Login;