import Image from "next/image";

const BavetteStory = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center p-4 lg:py-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#050505]">
        <h2 className="font-oswald text-center text-5xl text-[#262626] md:left-[15%] md:text-8xl">
          The Marhaba
          <br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#050505] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/about-us/story.png"
              width={577}
              height={676}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="font-oswald max-w-[500px] text-center text-5xl md:text-start md:text-7xl">
              From Dream
              <br />
              to Sizzle
            </h1>
            <p className="max-w-[450px] text-center font-light leading-[160%] text-[#C1B6A6] md:text-start">
              What began as a heartfelt vision — a desire to bring people closer
              through the shared language of food — has blossomed into Marhaba:
              a haven where flavours and souls gracefully meet. Guided by
              timeless traditions, our journey is not merely about preparing
              meals, but about creating meaningful experiences that nourish both
              heart and spirit.
              <br />
              From modest beginnings to a sanctuary for those who find comfort
              and connection in every bite, our devotion to craftsmanship,
              warmth, and authenticity has never wavered. Each ingredient is
              carefully selected, every dish prepared with love, and every
              flavour tells a story — one rooted in heritage and togetherness.
              <br />
              At Marhaba, we don’t just serve food — we offer moments of pause,
              a taste of harmony, and a celebration of life’s richness, shared
              around the table.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
