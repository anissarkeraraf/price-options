import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {

    const { name, price, features } = option;

    return (
        <div className="bg-blue-500 text-center p-5 flex flex-col rounded-lg text-white">
            <h1>
                <span className="text-6xl font-extrabold">{price}</span>
                <span className="text-2xl">/month</span>
            </h1>
            <h2 className="text-4xl mt-4 mb-5">{name}</h2>
            <div className="ml-10 flex-grow">
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className="w-full bg-green-500 mt-10 py-2 rounded-lg hover:bg-green-900">Buy Now</button>
        </div>
    );
};

export default PriceOption;