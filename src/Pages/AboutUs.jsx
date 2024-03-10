
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
    return (
        <div className='max-w-6xl mx-auto text-lg space-y-7 mt-10'>
            <h1 className="text-4xl md:text-6xl"> Welcome to Kibria Event Mangement – Crafting Unforgettable Corporate Experiences!</h1>

            <p >At Kibria Event Mangement, we specialize in transforming ordinary events into extraordinary experiences. With a passion for precision and a commitment to innovation, we elevate corporate gatherings to new heights.</p>

            <p className='text-4xl'>Why Choose Kibria Event Mangement <span className='text-8xl '>?</span></p>

            <div className='space-y-10 mt-10'>
                <p ><span className=' font-semibold'>Seamless Execution:</span> Our expert team ensures flawless event planning and execution, leaving you free to focus on what matters most – your business.
                </p>
                <p>
                    <span className='font-semibold'>Tailored Solutions:</span> Every event is unique. We customize our services to match your corporate identity, goals, and the distinctive needs of your audience.
                </p>

                <p><span className="font-semibold">Innovation at Every Turn:</span> Stay ahead in the dynamic corporate landscape with our tech-savvy approach. We integrate the latest trends to keep your events fresh and engaging.</p>

                <p><span className='font-semibold'>Client-Centric Focus:</span> Your satisfaction is our priority. We work closely with you to understand your vision and deliver an event that exceeds expectations.</p>

                <p>
                    <span className='font-semibold'>Proven Excellence:</span> With a track record of successful corporate events, we bring experience and expertise to ensure your event is a resounding success.
                </p>
            </div>

            <h1 className='text-center text-3xl py-10'>Discover the difference of working with Kibria Event Mangement. Let's create memorable moments together!</h1>
            <Helmet>
        <title>About Us ||Kibria event Mangement </title>
        <link rel="canonical" href="../assets/logo.jpg" />
      </Helmet>
        </div>
    );
};

export default AboutUs;