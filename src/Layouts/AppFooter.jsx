import { FaFacebook, FaInstagram, FaThreads, FaTwitter } from "react-icons/fa6"
import { Link } from "react-router-dom"


const AppFooter = () => {
    return (
        <div className="bg-base-200">
            <footer className="footer p-10 container mx-auto text-base-content">
                <aside>
                    <Link to={'/'} className="max-w-16">
                        <img className=' max-w-full rounded-lg' src="https://play-lh.googleusercontent.com/nlassGkKm4bOZtWvw65e3X3K53uodpkM9WuR7951KbkoIGGiNJtrML03zq_sISzagsQ=w240-h480-rw" />
                    </Link>
                    <p className="text-3xl font-bold font-custom tracking-wider text-yellow-500">Food Monkey</p>
                    <p className="-mt-2">Providing reliable tech since 2024</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className=" space-y-0">
                    <h6 className="footer-title">Social Links</h6>
                    <h6 className="footer-title flex items-center space-x-2 text-sm capitalize"><FaFacebook /> <span>Facebook</span></h6>
                    <h6 className="footer-title flex items-center space-x-2 text-sm capitalize"><FaTwitter /> <span>Twitter</span></h6>
                    <h6 className="footer-title flex items-center space-x-2 text-sm capitalize"><FaInstagram /> <span>Instagram</span></h6>
                    <h6 className="footer-title flex items-center space-x-2 text-sm capitalize"><FaThreads /> <span>Threads</span></h6>
                </nav>
            </footer>
        </div>
    )
}

export default AppFooter