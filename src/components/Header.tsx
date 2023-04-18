import "../../public/rocket.png"

export function Header(){
    return(
        <div className="w-full h-[200px] bg-gray700 flex justify-center items-center">
            <img src="rocket.png"  />
            <h1 className="text-4xl ml-3 font-bold text-blue">to<span className="text-purple">do</span></h1>
        </div>
    )
}