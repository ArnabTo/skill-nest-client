import Tilt from 'react-parallax-tilt';

const Partners = () => {
    const containerStyle = {
        background: 'rgba(255, 255, 255, 0.22)',
        borderRadius: '16px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
      };
    return (
        <div className='my-14'>
            <div style={containerStyle}>
            <p className='text-center my-4 text-[#242424] font-medium'>Preferred by 20,000 organizations and millions of learners globally, our commitment to excellence resonates worldwide </p>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4' >
                    <Tilt>
                        <img className='h-20 my-5 mx-auto' src='https://i.ibb.co/z53F3Xw/ibm.png' />
                    </Tilt>
                    <Tilt>
                        <img className='h-20 my-5 mx-auto' src='https://i.ibb.co/PCRYzjc/bag.png' />
                    </Tilt>
                    <Tilt>
                        <img className='h-20 my-5 mx-auto' src='https://i.ibb.co/98szGf6/air-company-logo.png' />
                    </Tilt>
                    <Tilt>
                        <img className='h-20 my-5 mx-auto' src='https://i.ibb.co/QC9RGVd/game-center.png' />
                    </Tilt>
                    <Tilt>
                        <img className='h-20 my-5 mx-auto' src='https://i.ibb.co/VLkcvkM/microsoft.png' />
                    </Tilt>
                    <Tilt>
                        <img className='h-20 my-5 mx-auto' src='https://i.ibb.co/q9Y2pS6/search.png' />
                    </Tilt>
                    <Tilt>
                        <img className='h-20 my-5 mx-auto' src='https://i.ibb.co/253x5Yk/samsung.png' />
                    </Tilt>
                </div>
            </div>
        </div>
    );
};

export default Partners;