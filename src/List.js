import React, { useEffect, useState } from "react";

function List({ getitems }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(getitems);
  }, [getitems]);

  return (
    <div>
      {list.map((li, index) => (
        <div key={index}>{li}</div>
      ))}
    </div>
  );
}

export default List;
