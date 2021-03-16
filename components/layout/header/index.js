const Header = ({
    companyName,
    companyLogo
}) => {

    return (
        <header className='header-container'>
            <div className='header-branding'>
                <h1 className='header-branding-title'>{companyName}</h1>
            </div>
        </header>
    );
}

export default Header;