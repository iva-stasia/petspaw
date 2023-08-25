import Image from "next/image";

const Home = () => {
  return (
    <>
      <main className="flex-1">
        <div className="h-full bg-red-light rounded-[20px]"></div>
      </main>
      <div className="absolute h-screen w-[55%] top-0 right-0">
        <Image
          src="/girl-and-pet.png"
          fill
          alt="Girl with pet"
          priority
          className="object-cover object-left"
        />
      </div>
    </>
  );
};

export default Home;
