import MainHeader from "./MainHeader"

const Layout = (props) => {
    const searchHandler = (name) => {
        props.onSearch(name)
    }
    return (
        <>
            <MainHeader onSearch={searchHandler} />
            <main>{props.children}</main>
        </>
    )
}

export default Layout
