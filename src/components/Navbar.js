export default function Navbar(props) {
    const { classname } = props;
    return (
        <div className="flex justify-between py-6 px-8">
            <div className="text-lg ">
                <h1 className="">
                    Makanan <span>Boongan</span>
                </h1>
            </div>
            <div className="flex space-x-7">
                <ul className="flex space-x-3">
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
                <button>Get Started !</button>
            </div>
        </div>
    );
}
