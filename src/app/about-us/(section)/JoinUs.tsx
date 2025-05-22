import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";

const JoinUs = ({}) => {
  return (
    <section
      className="relative flex h-screen w-full items-center justify-center"
      style={{
        backgroundImage: `url('/images/about-us/join-us.png')`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex h-full w-full flex-col-reverse items-center justify-center gap-4 md:flex-row">
        <div className="flex h-full w-full flex-col items-center justify-center gap-[2.5rem] p-6">
          <h1 className="font-oswald max-w-[500px] text-center text-5xl leading-[60px]">
            Gather in Harmony
            <br />
            Savor Every Moment
          </h1>
          <p className="max-w-[450px] text-center font-light leading-[160%] text-[#C1B6A6]">
            Inspired by the spirit of Marhaba, we welcome you to a place where
            food becomes more than sustenance — it becomes a gesture of unity,
            love, and heartfelt gratitude. Whether you’re seeking a quiet
            evening of reflection or a joyful gathering with those you cherish,
            each dish is prepared with genuine care, each flavour tells a story,
            and every moment invites you to savour the present with an open
            heart and soul.
          </p>
          <Button
            variant="outline"
            className="group w-fit items-center gap-[1.19rem] border-primary bg-transparent font-semibold uppercase text-white hover:bg-primary"
          >
            Book Now{" "}
            <Icons.rightArrow className="text-primary duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
