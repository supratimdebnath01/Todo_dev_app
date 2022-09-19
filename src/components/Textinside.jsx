import React, {useState} from 'react'

export default function Textinside() {

const handleAdd = ()=>{
  let newText = note.toUpperCase();
  setText(newText);
}

const handleDelete = ()=>{
  let newText = ('');
  setText(newText);
}


const handleOnChange = (event)=>{
   setText(event.target.value);
}

const [note, setText] = useState('');

  return (
    <div className='container'>
        <div className='row'>
        <div className="col-md-8 my-4">
            <textarea className="form-control" value = {note} onChange={handleOnChange} id="myBox" rows="2" placeholder='Enter text here'></textarea>
        </div>
        <div className='col-md-4 my-4 d-flex align-items-center'>
            <button className=" btn btn-success" onClick={handleAdd}>Add More +</button>
            <button className=" btn btn-danger mx-4" onClick={handleDelete}>Delete x</button>
        </div>
        </div>
    </div> 
  )
}
