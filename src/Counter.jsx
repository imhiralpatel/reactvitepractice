import { useEffect, useState } from "react";
import './css/style.css'
import UserProfile from "./UserProfile";


const Counter=({count, Data})=>{

    
    const handleCounter=()=>{
        console.log("handleCounter Called");
        
    }

    const handleData=()=>{
        console.log("handleData Called");
        
    }

    useEffect(()=>{
        console.log("Mounting Phase");
        
    },[])

    useEffect(()=>{
        return()=>{
            console.log("UnMounting Phase");
        };
    },[Data]);

    useEffect(()=>{
        console.log("Update Mounting Phase");
        
    },[count])

    useEffect(()=>{
        handleCounter();
    }, [])

    useEffect(()=>{
        handleData();
    },[Data])
    
    // dynamic
    const [cardStyle, setCardStyle]=useState({
                border:'2px solid #cccccc3b',
                width:'200px',
                boxShadow:'1px 2px 3px 0px #cccccc57',
                margin:'10px'
            })

            // Conditional
    // const cardStyle={
    //             border:'2px solid #cccccc3b',
    //             width:'200px',
    //             boxShadow:'1px 2px 3px 0px #cccccc57',
    //             margin:'10px'
    //         }

    const [textcolor, setTextColor]=useState('black');
    const [grid, setGrid]=useState(true);
    const updateTheme=(bgColor, textColor)=>{
        setCardStyle({...cardStyle, backgroundColor:bgColor})
        setTextColor(textColor)
    }

    

    return(
        <>
        <div>
            <h1>Counter Component Value {count}</h1>

            <h1>
                <span style={{color:'red'}}>
                    Data Component Value
                    </span> {Data}
            </h1>
            
            <hr />

            <div>

               <h2 style={{color:"maroon"}}>35. Style With CSS Module in React JS</h2> 

               <UserProfile />
            </div>

            <hr />

            <div>
                <h2 className="heading">34. External Style</h2>
                
                <div className="container">
                    
                    <div className="user-card">
                        <img className="img-style" src="https://mrwallpaper.com/images/hd/cool-profile-picture-paper-bag-head-4co57dtwk64fb7lv.jpg" alt="" />
                        <div className="text-wrap">
                            <h4>Hiral Patel</h4>
                            <p>Software Developer</p>
                        </div>
                    </div>

                </div>
            </div>

            <hr />

            <div>
                    
                <h2 style={{color:'red'}}>
                    32. Inline CSS AND Style Component
                </h2>

                <button onClick={()=>updateTheme('grey', 'red')}>Grey Theme</button>
                <button onClick={()=>updateTheme('white', 'black')}>Default Theme</button>
                <button onClick={()=>setGrid(!grid)}>Toggle Grid</button>

                <div style={{display: grid?'flex':'block', flexWrap:'wrap'}}>

                    <div style={cardStyle}>
                        <img style={{width:'200px'}} src="https://mrwallpaper.com/images/hd/cool-profile-picture-paper-bag-head-4co57dtwk64fb7lv.jpg" alt="" />
                        <div style={{padding:'5px', color:textcolor}}>
                            <h4>Hiral Patel</h4>
                            <p>Software Developer</p>
                        </div>
                    </div>

                    <div style={cardStyle}>
                        <img style={{width:'200px'}} src="https://mrwallpaper.com/images/hd/cool-profile-picture-paper-bag-head-4co57dtwk64fb7lv.jpg" alt="" />
                        <div style={{padding:'5px', color:textcolor}}>
                            <h4>Hiral Patel</h4>
                            <p>Software Developer</p>
                        </div>
                    </div>

                    <div style={cardStyle}>
                        <img style={{width:'200px'}} src="https://mrwallpaper.com/images/hd/cool-profile-picture-paper-bag-head-4co57dtwk64fb7lv.jpg" alt="" />
                        <div style={{padding:'5px', color:textcolor}}>
                            <h4>Hiral Patel</h4>
                            <p>Software Developer</p>
                        </div>
                    </div>

                    <div style={cardStyle}>
                        <img style={{width:'200px'}} src="https://mrwallpaper.com/images/hd/cool-profile-picture-paper-bag-head-4co57dtwk64fb7lv.jpg" alt="" />
                        <div style={{padding:'5px', color:textcolor}}>
                            <h4>Hiral Patel</h4>
                            <p>Software Developer</p>
                        </div>
                    </div>

                    <div style={cardStyle}>
                        <img style={{width:'200px'}} src="https://mrwallpaper.com/images/hd/cool-profile-picture-paper-bag-head-4co57dtwk64fb7lv.jpg" alt="" />
                        <div style={{padding:'5px', color:textcolor}}>
                            <h4>Hiral Patel</h4>
                            <p>Software Developer</p>
                        </div>
                    </div>

                    <div style={cardStyle}>
                        <img style={{width:'200px'}} src="https://mrwallpaper.com/images/hd/cool-profile-picture-paper-bag-head-4co57dtwk64fb7lv.jpg" alt="" />
                        <div style={{padding:'5px', color:textcolor}}>
                            <h4>Hiral Patel</h4>
                            <p>Software Developer</p>
                        </div>
                    </div>

                    <div style={cardStyle}>
                        <img style={{width:'200px'}} src="https://mrwallpaper.com/images/hd/cool-profile-picture-paper-bag-head-4co57dtwk64fb7lv.jpg" alt="" />
                        <div style={{padding:'5px', color:textcolor}}>
                            <h4>Hiral Patel</h4>
                            <p>Software Developer</p>
                        </div>
                    </div>

                    <div style={cardStyle}>
                        <img style={{width:'200px'}} src="https://mrwallpaper.com/images/hd/cool-profile-picture-paper-bag-head-4co57dtwk64fb7lv.jpg" alt="" />
                        <div style={{padding:'5px', color:textcolor}}>
                            <h4>Hiral Patel</h4>
                            <p>Software Developer</p>
                        </div>
                    </div>


                </div>
            </div>
            

        </div>
        </>
    )
}

export default Counter;