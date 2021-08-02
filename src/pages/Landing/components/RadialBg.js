const RadialBg = ({children}) => {
    return ( 
        <div className="flex justify-center items-center w-48 h-48" style={{background: "radial-gradient(50% 50% at 50% 50%, rgba(255, 92, 0, 0.25) 0%, rgba(255, 114, 34, 0) 100%)"}}>
            {children}
        </div>
     );
}
 
export default RadialBg;