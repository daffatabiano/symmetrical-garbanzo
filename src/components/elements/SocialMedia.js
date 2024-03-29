export default function SocialMedia({ children }) {
    return <>{children}</>;
}

const Facebook = ({ width }) => {
    return (
        <>
            <svg
                className={width}
                xmlns="http://www.w3.org/2000/svg"
                data-name="Ebene 1"
                viewBox="0 0 1024 1024"
                id="facebook-logo-2019"
            >
                <path
                    fill="#1877f2"
                    d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"
                ></path>
                <path
                    fill="#fff"
                    d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"
                ></path>
            </svg>
        </>
    );
};

const Instagram = ({ width }) => {
    return (
        <>
            <svg
                className={width}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                id="instagram"
            >
                <linearGradient
                    id="a"
                    x1="1.464"
                    x2="14.536"
                    y1="14.536"
                    y2="1.464"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#FFC107"></stop>
                    <stop offset=".507" stopColor="#F44336"></stop>
                    <stop offset=".99" stopColor="#9C27B0"></stop>
                </linearGradient>
                <path
                    fill="url(#a)"
                    d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"
                ></path>
                <linearGradient
                    id="b"
                    x1="5.172"
                    x2="10.828"
                    y1="10.828"
                    y2="5.172"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#FFC107"></stop>
                    <stop offset=".507" stopColor="#F44336"></stop>
                    <stop offset=".99" stopColor="#9C27B0"></stop>
                </linearGradient>
                <path
                    fill="url(#b)"
                    d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"
                ></path>
                <linearGradient
                    id="c"
                    x1="11.923"
                    x2="12.677"
                    y1="4.077"
                    y2="3.323"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#FFC107"></stop>
                    <stop offset=".507" stopColor="#F44336"></stop>
                    <stop offset=".99" stopColor="#9C27B0"></stop>
                </linearGradient>
                <circle cx="12.3" cy="3.7" r=".533" fill="url(#c)"></circle>
            </svg>
        </>
    );
};

const Twitter = ({ width }) => {
    return (
        <>
            <svg
                className={width}
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 72 72"
                viewBox="0 0 72 72"
                id="twitter-x"
            >
                <switch>
                    <g>
                        <path
                            d="M42.5,31.2L66,6h-6L39.8,27.6L24,6H4l24.6,33.6L4,66
			h6l21.3-22.8L48,66h20L42.5,31.2z M12.9,10h8l38.1,52h-8L12.9,10z"
                        ></path>
                    </g>
                </switch>
            </svg>
        </>
    );
};

const Youtube = ({ width }) => {
    return (
        <>
            <svg
                className={width}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                id="youtube"
            >
                <g fillRule="evenodd" clip-rule="evenodd">
                    <path
                        fill="#F44336"
                        d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438z"
                    ></path>
                    <path fill="#FAFAFA" d="M6 11.5v-6l5 3z"></path>
                </g>
            </svg>
        </>
    );
};
const GitHub = ({ width }) => {
    return (
        <>
            <svg
                className={width}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                id="github"
            >
                <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
            </svg>
        </>
    );
};

const LinkedIn = ({ width }) => {
    return (
        <>
            <svg
                className={width}
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="72"
                viewBox="0 0 72 72"
                id="linkedin"
            >
                <g fill="none" fill-rule="evenodd">
                    <g>
                        <rect
                            width="72"
                            height="72"
                            fill="#117EB8"
                            rx="4"
                        ></rect>
                        <path
                            fill="#FFF"
                            d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z"
                        ></path>
                    </g>
                </g>
            </svg>
        </>
    );
};

SocialMedia.Facebook = Facebook;
SocialMedia.Instagram = Instagram;
SocialMedia.Twitter = Twitter;
SocialMedia.GitHub = GitHub;
SocialMedia.LinkedIn = LinkedIn;
SocialMedia.Youtube = Youtube;
