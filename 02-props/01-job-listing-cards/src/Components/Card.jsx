import {Bookmark} from 'lucide-react'

const Card=(props)=>{

    return(
        <>
        <div >

        <div className="Container">
        <div className="header">

            <div className="top">

                <img src={props.pic} alt="logo"/>
                <button>Follow<Bookmark /></button>


            </div>


        </div>

        <div className="center">
              <div className='content'>
            <h3>{props.brand} <span>{props.date}</span></h3>
            <h1>{props.post}</h1>

            </div>
            
        <div className='two'>
            <h4>{props.t1}</h4>
              <h4>{props.t2}</h4>
        </div>

        </div>


        <div className="footer">
        
        <div className='last'>
            <h2>{props.pay}</h2>
            <p>{props.loc}</p>
        </div>

        <button>Apply Now</button>

        </div>
        
        </div>
        </div>
        
        
        </>
    )
}
export default Card