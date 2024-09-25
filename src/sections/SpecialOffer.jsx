import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section
      className="flex justify-wrap items-center
  max-xl:flex-col-reverse gap-10 max-container
  "
    >
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2
          className="mt-10 font-palanquin 
        text-4xl capitalize font-bold lg:max-w-lg
        "
        >
          <span
            className="text-coral-red
          "
          >
            Special
          </span>{" "}
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text ">
          Embark ona shopping journey that redefines your experience with
          unbeatable deals. From premier selections to increadible savings, we
          offer unparalled value that lets us apart.
        </p>
        <p
          className="mt-6 lg:max-w-lg 
        info-text
        "
        >
          Navigate a realm of possibilities designed to fullfil your unique
          desires, surpassing the loftiest expectations. Your joureny with us is
          nothing short of exception.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label={"Learn More"}
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-black"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
