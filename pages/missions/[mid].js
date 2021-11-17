import { useRouter } from 'next/router'
import MissionRenderer from "../../components/MissionRenderer"
const Mission = () => {
  const router = useRouter()
  const { mid } = router.query
  return <div>
      <MissionRenderer missionId={mid}/>
  </div> 
}

export default Mission