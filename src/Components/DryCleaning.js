import React from "react";
import { Link } from "react-router-dom";
import  OrderPage  from "./Cards/OrderPage"; // Corrected the import statement

function DryCleaning() {
  console.log("OrderLan component is rendering");
  return (
    <div>
      <Link to="/dry-cleaning" className="btn">
        
      </Link>
<div>
<OrderPage/>
</div>
      
    </div>
  );
}

export default DryCleaning;
