import Card from './Components/Card';

const App=()=>{

 const jobOpenings = [
  {
    id: 1,
    logo: "/google.jpeg",
    brandName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$85/hr", // in dollars
    location: "Remote, USA"
  },
  {
    id: 2,
    logo: "/micro.jpeg",
    brandName: "Microsoft",
    datePosted: "5 days ago",
    post: "React Developer",
    tag: "Part Time",
    tag2: "Junior Level",
    payPerHour: "$35/hr",
    location: "Islamabad, Pakistan"
  },
  {
    id: 3,
    logo: "/netflix.jpg",
    brandName: "Netflix",
    datePosted: "1 day ago",
    post: "UI/UX Designer",
    tag: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$70/hr",
    location: "Los Angeles, USA"
  },
  {
    id: 4,
    logo: "/shopi.jpeg",
    brandName: "Shopify",
    datePosted: "3 days ago",
    post: "Backend Developer",
    tag: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$45/hr",
    location: "Remote, Canada"
  },
  {
    id: 5,
    logo: "/spotify.jpeg",
    brandName: "Spotify",
    datePosted: "Just now",
    post: "Web Development Intern",
    tag: "Part Time",
    tag2: "Junior Level",
    payPerHour: "$25/hr",
    location: "Stockholm, Sweden"
  }
];

  return(
    <div className="parent">

      {jobOpenings.map((job,index)=>( 

        <div key={index} >
        
        <Card  brand={job.brandName} pic={job.logo} date={job.datePosted} p={job.post} t1={job.tag} t2={job.tag2} pay={job.payPerHour} loc={job.location}/>
</div>
      )

      )}

    </div>
   
     
   
  )
}
export default App