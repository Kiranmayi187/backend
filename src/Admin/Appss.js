import Navigate from "./Navigate"
import AddCenter from "./AddCenter"
import CenterProfile from "./CenterProfile"
import Logout from "./Logout"
import EditAdmin from "./EditAdmin"

import {Route,Routes} from "react-router-dom"

function app(){
    return(
       <> 
      
      <div className="containers">
        <Routes>
          <Route path="/Navigate" element={<Navigate />} />
          <Route path="/AdminScreen/AddCenter" element={<AddCenter />} />
          <Route path="/AdminScreen/CenterProfile" element={<CenterProfile />} /> 
          <Route path="/AdminScreen/EditAdmin/:id" element={<EditAdmin />}/>         
          <Route path="/logout" element={<Logout />} />

        </Routes>
      </div>
      </>  
    )

}
export default app