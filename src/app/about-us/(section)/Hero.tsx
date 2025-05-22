import Image from "next/image";

const Hero = ({}) => {
  return (
    <section
      id="hero"
      className="mt-8 flex w-full items-center justify-center md:mt-20"
    >
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="flex w-full flex-col gap-6 px-4 lg:flex-row lg:gap-0 lg:px-0">
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <div className="mt-20 flex flex-col items-start gap-6 lg:mt-0 lg:w-8/12">
              <h1 className="font-oswald text-5xl font-semibold text-primary md:leading-[66px] lg:text-6xl">
                Welcome to Marhaba <br />A Symphony of Flavors
              </h1>
              <p className="font-manrope font-normal text-[#000]">
                At Marhaba, dining is more than just a meal — it’s a heartfelt
                experience. Each dish is prepared with care and reverence,
                honouring cherished traditions and the joy of togetherness. From
                handpicked ingredients to time-honoured recipes, we welcome you
                to savour a symphony of flavours that nourish both body and
                soul. Let every bite embody warmth, unity, and the timeless
                poetry of life shared around the table.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 lg:w-1/2">
            <Image
              src="/images/about-us/hero.png"
              width={951}
              height={975}
              alt="hero"
              className="h-full md:h-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
