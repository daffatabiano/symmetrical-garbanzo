export default function Button({
    style = 'bg-yellow-600 text-white px-3 py-1 rounded font-bold text-white',
    children,
}) {
    return (
        <>
            <button className={style}>{children}</button>
        </>
    );
}
