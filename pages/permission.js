
import PleaseSignIn from '../components/PleaseSignIn';
import Permissions from '../components/Permissions';

const Permission = (props)=>{
  return(
   <div>
    <PleaseSignIn>
      <Permissions />
    </PleaseSignIn>
   </div>
  )
}
export default Permission;
