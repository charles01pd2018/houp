const Header = ({
    companyName,
    companyLogo
}) => {

    return (
        <section className='header-container'>
            <header className='header-wrapper'>
                <div className='header-branding'>
                    <h1 className='header-branding-title'>{companyName}</h1>
                </div>
            </header>
        </section>
    );
}

export default Header;