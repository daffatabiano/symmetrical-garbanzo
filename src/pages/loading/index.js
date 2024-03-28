export default function Loading() {
    return (
        <div className="text-center py-20">
            <img
                className="w-50 mx-auto rounded-full"
                src="/images/loading.png"
                alt=""
            />
            <h1 className="text-3xl font-bold text-[#269faa] animation-ping">
                Loading . . .
            </h1>
        </div>
    );
}
