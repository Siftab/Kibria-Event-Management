import { Link } from "react-router-dom";


const Card = ({ props }) => {
  const { name, image, price, description, id } = props
  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-auto"  data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1500">
      <div
        className="rounded-xl p-4 h-1/2">
        <img
          src={image}
          alt="card-image" className="rounded-xl h-full w-full" />
      </div>
      <div className="p-6 text-left">
        <h5 className="block mb-2 font-sans text-xl  font-semibold leading-snug tracking-normal text-blue-gray-900">
          {name}
        </h5>
        <p className="block font-sans text-base  font-light leading-relaxed text-inherit">
          {
            description.slice(0,100)
          }
        </p>
        <p className="text-base">Price starts from<span className="text-green-500 ">{price}</span></p>

      </div>
      <div className="p-6 pt-0 flex ">
        <Link to={`/services/${id}`}><button
          className="btn bg-yellow-400 text-slate-600"
          type="button">
          Read More
        </button></Link>
      </div>
    </div>
  );
};

export default Card;