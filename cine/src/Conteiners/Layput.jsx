import Header from "../Complements/Header";

function Layout({children}) {
    return ( 
        <>
        <Header></Header>
        {children}
        </>
     );
}

export default Layout;