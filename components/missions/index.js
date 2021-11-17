/* eslint-disable */
import React, {useEffect}from "react";
import { useQuery,gql } from "@apollo/client";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'

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
export default function Missions() {
    const {loading,error,data}=useQuery(ALL_MISSIONS);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Caught an error trying to get the data..!</p>
    console.log(data.launchesPast);
    return ( 
        <>
        {data.launchesPast.map((missions,id)=>{
          let photo = missions["links"]["flickr_images"][1];
          if(photo===undefined)
          {
            //some of the rockets in the api have no photos so i had to put a custom one
            photo="https://statik.tempo.co/data/2020/05/31/id_941947/941947_720.jpg";
          }
          return(
          <div>
            <Link href={'/missions/' + missions["id"]} key={missions["id"]}>
            <Card style={{maxWidth:450,marginBottom:20,height:400}}>
                <CardActionArea>
               <img
                alt="SpaceX"
                src={photo}
                style={{width:450,height:300}}
               />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                       {missions["mission_name"]}
                  </Typography>
                  <Typography component="p" noWrap>
                       {missions["details"]}
                  </Typography>
                 </CardContent>
              </CardActionArea>
            </Card>
            </Link>
          </div>
          )
        })}
        </>
     );
}
 