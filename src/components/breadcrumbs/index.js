export default function BreadCrumbs() {
    return (
        <nav className="flex py-3 px-5 absolute z-10" aria-label="Breadcrumb">
            <ol className=" inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                    <a
                        href=""
                        class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-[#269faa]"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <div class="flex items-center">
                        <svg
                            class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                        <a
                            href="#"
                            class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-[#269faa]"
                        >
                            About
                        </a>
                    </div>
                </li>
            </ol>
        </nav>
    );
}