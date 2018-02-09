import React from 'react';
import './Addblock.css';

const Addblock = ({addBlock, addData, data}) => {
    return (
      <div className="gridAdd mb4">
        <div className="datas gridData">
          <p className="data small-border asc bl">Data</p>
          <input className="input form-control small-border br" type="text" value={data} onChange={addData}/>
        </div>
        <button type="button" className="add btn btn-info" onClick={addBlock}>Add Block</button>
      </div>
    );
}

export default Addblock;
