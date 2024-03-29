export default function DescriptionHome() {
    return (
        <div className="flex flex-row  p-10 justify-between mb-10">
            <div className="flex flex-col my-2 w-[58%]">
                <h1 className="text-6xl font-bold my-5">
                    Healthy{' '}
                    <span className="font-['ZCOOL_KuaiLe'] text-[#269faa]">
                        MoDerN{' '}
                    </span>{' '}
                    Food
                </h1>
                <h4 className="text-red-500 font-bold">
                    read about summary our using ingred.
                </h4>
                <p className="text-lg semi-bold">
                    Based on our understanding of nutritional requirements and
                    their likely health impacts as described above, healthy
                    dietary patterns can be generally described as those that
                    are rich in health-promoting foods, including plant-based
                    foods, fresh fruits and vegetables, antioxidants, soya,
                    nuts, and sources of omega-3
                </p>
                <div className="flex space-x-12">
                    <div className="space-y-2">
                        <h1 className="font-bold text-7xl text-center">
                            {'10%-15%'}
                        </h1>
                        <h2 className="font-bold text-3xl">Protein</h2>
                        <p className="text-xl font-thin">
                            The human body requires a protein intake of 10-15%
                            of daily protein intake. The sources of protein that
                            can be consumed are quite diverse, both vegetable
                            protein and animal protein
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h1 className="font-bold text-7xl text-center">
                            {'A / B'}
                        </h1>
                        <h2 className="font-bold text-3xl">Vitamin</h2>
                        <p className="text-xl font-thin">
                            To increase the body's endurance, vitamins are
                            really needed. Vitamins are very diverse and can be
                            obtained from every food consumed every day.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-1/3 ">
                <img src="/images/home-desc.png" alt="" />
            </div>
        </div>
    );
}
