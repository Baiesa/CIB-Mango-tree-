const WhatIsCIBSection = () => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-emerald-700">What is Coordinated Inauthentic Behavior?</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <p className="mb-4">
                        Coordinated Inauthentic Behavior (CIB) is the organized use of fake or misleading
                        accounts, content, or activity to manipulate public opinion, disrupt online discourse,
                        or spread disinformation.
                    </p>
                    <p>
                        Often used by state or non-state actors, CIB undermines the integrity of online platforms
                        by distorting legitimate discussions around critical issues like health, politics, and
                        societal events.
                    </p>
                </div>
                <div>
                    <img
                        src="/path/to/cib-image.jpg" // Replace with your actual image path
                        alt="CIB Visualization"
                        className="rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default WhatIsCIBSection;
