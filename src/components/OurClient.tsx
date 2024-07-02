import img1 from "/Spotifysvg.svg";

export default function OurClientComponent() {
  return (
    <>
      <div className="py-[24px] md:py-[80px] px-[100px]">
        <p className="text-[#07152A] font-[Poppins] text-[32px] md:text-[40px] font-semibold leading-[32px] text-center pb-[60px]">
          Our Clients
        </p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          <div>
            <img src={img1} className="block m-auto" />
          </div>
          <div>
            <img src={img1} className="block m-auto" />
          </div>
          <div>
            <img src={img1} className="block m-auto" />
          </div>
          <div>
            <img src={img1} className="block m-auto" />
          </div>
          <div>
            <img src={img1} className="block m-auto" />
          </div>
        </div>
      </div>
    </>
  );
}
