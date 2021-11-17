/* eslint-disable*/
import React from 'react'
import { useQuery,gql } from "@apollo/client";
const ALL_MISSIONS = gql`
{
    launchesPast(limit: 10) {
      mission_name
      rocket {
        rocket_name
      }
      ships {
        name
        image
      }
      details
      id
      launch_success
      launch_date_local
      links {
        flickr_images
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
              return(
              <div style={{color:'white'}}>
                Hey : {missions["id"]}
              </div>
              )}
            })}
            </>
    )
}

export default MissionRenderer
