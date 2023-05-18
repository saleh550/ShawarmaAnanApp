import Navbar from './Navbar'

function Header(){
    return (<>
        
        <div  className='text-center' id="headerHomePage">
        <Navbar/>
            <div id='headerImage'>
                <img src={require('../images/LogoHD.png')}/>
            </div>
        </div>
    </>)
}
export default Header