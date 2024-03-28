import './logo.module.css';
export default function LogoNavbar() {
    return (
        <div className="logo text-lg flex items-center">
            <LogoPicture />
            <LogoName />
        </div>
    );
}

export function LogoPicture() {
    return (
        <img
            src="/images/logo.png"
            className="w-12 mx-2 max-[500px]:w-8"
            alt=""
        />
    );
}

export function LogoName({ style }) {
    return (
        <h1
            className={`logo-name block font-bold ${style} text-3xl text-white w-10 leading-5`}
        >
            Makanan{' '}
            <span className="text-yellow-500 mx-7 font-['ZCOOL_KuaiLe']">
                B<span className="text-[#269faa]">o</span>
                <span className="text-[#269faa]">0</span>
                <span className="text-[#ff4b31]">n</span>
                <span className="text-[#3a9182]">g</span>
                <span className="text-[#ff4b31]">a</span>N~
            </span>
        </h1>
    );
}
LogoNavbar.LogoName = LogoName;
