const Button = (props)=>{
    const {text} = props 
    return <div>
        <button type="button"  className="text-4xl bg-[white]/10 hover:bg-[white]/25 font-bold text-white bg-opacity-75 shadow-md py-5 px-6 rounded-2xl w-[300px] md:w-[400px] mb-10 backdrop-blur-xl z-20">
            {text}
        </button>
    </div>
}

export default Button