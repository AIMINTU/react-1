
import img from '../../assets/images/9.png'
const Headers = () => {
    return (
        <div className='flex justify-between max-w-5xl mx-auto border-b-2 py-5'>
            <h1 className="text-5xl font-bold">Logo</h1>
            <img height={'100px'} width={'50'}src={img} alt="Hi" />
        </div>
    );
};

export default Headers;