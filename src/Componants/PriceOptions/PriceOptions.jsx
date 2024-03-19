import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const options = [
        {
            "id": 1,
            "name": "Starter",
            "price": "$20",
            "features": [
                "Access to cardio equipment",
                "Limited access to weightlifting area"
            ]
        },
        {
            "id": 2,
            "name": "Basic",
            "price": "$30",
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Limited access to group classes"
            ]
        },
        {
            "id": 3,
            "name": "Standard",
            "price": "$50",
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Full access to group classes",
                "Access to sauna and steam room"
            ]
        },
        {
            "id": 4,
            "name": "Premium",
            "price": "$80",
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Full access to group classes",
                "Access to sauna and steam room",
                "Personal trainer sessions (2/month)"
            ]
        },
        {
            "id": 5,
            "name": "Elite",
            "price": "$120",
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Full access to group classes",
                "Access to sauna and steam room",
                "Unlimited personal trainer sessions",
                "Nutritional guidance"
            ]
        },
        {
            "id": 6,
            "name": "Senior",
            "price": '$20',
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Limited access to group classes (Age 65+)"
            ]
        }
    ]


    return (
        <div>
            <h2 className="lg:text-6xl text-4xl text-center mb-8">Best Prices In The Town</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {
                    options.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;