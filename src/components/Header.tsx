import rocket from "../assets/rocket.png"

export function Header() {
  return (
    <div className="w-full h-[200px] bg-[#0D0D0D] flex justify-center items-center">
      <img src={rocket} />
      <h1 className="text-4xl ml-3 font-bold text-[#4EA8DE]">
        to<span className="text-[#8284FA]">do</span>
      </h1>
    </div>
  );
}
