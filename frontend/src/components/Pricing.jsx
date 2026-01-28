import React from 'react';

const PricingCard = ({ title, price, features, buttonText, highlighted }) => (
    <div className={`p-8 rounded-lg border ${highlighted ? 'border-blue-600 shadow-xl scale-105 relative z-10' : 'border-gray-200 shadow-sm'} bg-white transition-all duration-300 hover:shadow-lg flex flex-col`}>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <div className="text-4xl font-bold text-blue-600 mb-6">{price}</div>
        <ul className="space-y-4 mb-8 flex-grow">
            {features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-gray-600 text-sm">
                    <span className="mr-2 text-green-500">✓</span>
                    {feature}
                </li>
            ))}
        </ul>
        <button className={`w-full py-3 rounded font-bold transition-colors ${highlighted ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}>
            {buttonText}
        </button>
    </div>
);

const Pricing = () => {
    const plans = [
        {
            title: "Early Bird",
            price: "$25",
            features: ["Get full access with a discounted rate.", "Access to all keynotes", "Networking lunch included"],
            buttonText: "Register Now",
            highlighted: false
        },
        {
            title: "Standard Pass",
            price: "$40",
            features: ["Includes workshops and mentorship sessions.", "Certificate of participation", "Swag bag"],
            buttonText: "Join Today",
            highlighted: true
        },
        {
            title: "Team Package",
            price: "$150",
            features: ["Perfect for groups up to five participants.", "Dedicated mentor", "Team workspace"],
            buttonText: "Sign Up",
            highlighted: false
        }
    ];

    return (
        <section id="expos" className="py-24 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pricing & Events</h2>
                    <p className="text-gray-600">Choose the best plan for your journey.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
                    {plans.map((plan, index) => (
                        <PricingCard key={index} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
