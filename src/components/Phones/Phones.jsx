/* eslint-disable react/prop-types */

import PhoneCard from "./PhonesCard";

const Phones = ({ phones }) => {
    return (
        <div>
            <h1 className="text-2xl text-center">All Phones Here</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5 py-10">
                {
                    phones?.map(phone =><PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                }
            </div>
        </div>
    );
};

export default Phones;