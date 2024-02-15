import React,{useState} from 'react'

export default function About() {
    const [mystyle,setstyle]= useState({
        color:'black',
        backgroundColor : 'white',
       

    })
    const [btntxt, setbtntxt] = useState("Enable dark mode")

    const toggleStyle =()=>{
        if(mystyle.color==='black'){
            setstyle({
                color: 'white',
                backgroundColor: 'black',
                border: '2px solid white' 
                })
            
                setbtntxt("Enable light mode")
        }
        else
            {
                setstyle({
                    color: 'black',
                    backgroundColor: 'white'
                    })
                    setbtntxt("Enable dark mode")
            }

    }
    return (
   
        <div className="accordion accordion-flush" id="accordionFlushExample">
         <div className="container my-2" style={mystyle}><h1> About Us </h1></div>
         <div className="accordion-item">
        <h2 className="accordion-header my-3" style={mystyle}>
        <button className="accordion-button collapsed"  style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
        </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
        </div>
        </div>
        <div className="accordion-item">
        <h2 className="accordion-header my-3" style={mystyle}>
        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
        </button>
        </h2>
        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
        </div>
        </div>
        <div className="accordion-item">
        <h2 className="accordion-header my-3" style={mystyle}>
        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
        </button>
        </h2>
        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
        </div>
        <div classNameName="container my-7"> 
            <button onClick={toggleStyle} style={{color:'white',backgroundColor:'blue'}} type="button"  className="btn btn-outline-primary">{btntxt}</button>
        </div>
        </div>
        </div>
       
       
        
        )
    }
    