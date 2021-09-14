import Header from "./header/Header";
import Footer from "./footer/Footer";
import Main from "./main/Main";

export function Layout() {
    return(
        <div className="layout">
            <Header></Header>
                <Main></Main>
            <Footer></Footer>
        </div>
    );
}