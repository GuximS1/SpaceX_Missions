/* eslint-disable*/
import React from 'react'
import { useQuery,gql } from "@apollo/client";
import Typography from '@material-ui/core/Typography';
import ReactPlayer from "react-player"
const ALL_MISSIONS = gql`
{
    launchesPast(limit: 10) {
      mission_name
      rocket {
        rocket_name
        rocket {
          height {
            meters
          }
          diameter {
            meters
          }
          mass {
            kg
          }
          
        }
        rocket_type
      }
      details
      id
      launch_success
      launch_date_local
      links {
        flickr_images
        video_link
      }
    }
  }  
  `;
const MissionRenderer = props => {
    const {loading,error,data}=useQuery(ALL_MISSIONS);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Caught an error trying to get the data..!</p>
        return (
            <>
            {data.launchesPast.map((missions,id)=>{
              if(missions["id"]===props.missionId){
                let photo = missions["links"]["flickr_images"][1];
                if(photo===undefined)
                {
                  //some of the rockets in the api have no photos so i had to put a custom one
                  photo="https://statik.tempo.co/data/2020/05/31/id_941947/941947_720.jpg";
                }
                let detail = missions["details"];
                if(detail===null)
                {
                    detail="Unfortunately this rocket has no long details. Make sure to check the other rockets!"
                }
              return(
              <div style={{color:'white'}}>
                  <Typography gutterBottom variant="h2" component="h2">
                       {missions["mission_name"]}
                  </Typography>
                  <img
                    alt="SpaceX"
                    src={photo}
                    style={{width:'100%',maxHeight:600}}
                  />
                  <Typography gutterBottom variant="h6" component="h2">
                       {detail}
                       <br/><br/>
                      Rocket's name is {missions["rocket"]["rocket_name"]} and the type of the rocket is {missions["rocket"]["rocket_type"]}
                      <br/><br/>
                      The launch happened in {missions["launch_date_local"]}
                      <br/><br/>
                      The launch was {missions["launch_success"]==true ? 'successful' : 'not successful'}
                      <br/><br/>
                      The rocket is {missions["rocket"]["rocket"]["height"]["meters"]} metres tall,
                      has a diameter of {missions["rocket"]["rocket"]["diameter"]["meters"]} metres and 
                      its mass is {missions["rocket"]["rocket"]["mass"]["kg"]} kg.
                      <br/><br/>
                      To fully experience this launch, SpaceX provided a video on youtube down below:
                  </Typography>
                  
                  <ReactPlayer url={missions["links"]["video_link"]}/>
              </div>
              )}
            })}
            </>
    )
}

export default MissionRenderer
