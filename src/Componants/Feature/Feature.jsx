import {AiFillCheckCircle} from 'react-icons/ai';

const Feature = ({feature}) => {
    

    return (
        <div>
            <h1 className='flex items-center'><AiFillCheckCircle className='mr-2'></AiFillCheckCircle>{feature}</h1>
        </div>
    );
};

export default Feature;