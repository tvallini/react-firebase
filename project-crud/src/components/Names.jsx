import React, { useState } from 'react';
import uniqid from 'uniqid';

const Names = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [names, setNames] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState(null);

  const addName = (e) => {
    e.preventDefault();
    
    if (!name.trim()) {
      setError('name is empty');
      return;
    }

    const newName = {
      id: uniqid(),
      name: name
    }
    setNames([...names, newName]);
    setName('');
    setError(null);
  }

  const deleteName = (id) => {
    const newNames = names.filter( item => item.id !== id );
    setNames(newNames);
  }

  const isEdit = (item) => {
    setEditMode(true);
    setName(item.name);
    setId(item.id);
  }

  const editName = (e) => {
    e.preventDefault();
    const newNames = names
      .map( item => item.id === id ? { id: id, name: name } : item);
    setNames(newNames);
    setEditMode(false);
    setName('');
    setError(null);
  }

  return (
    <div className="container">
      <h1>CRUD basic</h1>
      <div className="row">
        <div className="col">
          <h2>Names</h2>
          <ul className="list-group">
            {
              names.map( (item) => 
                <li 
                  className="list-group-item"
                  key={ item.id } 
                >
                  { item.name }
                  <button 
                    className="btn btn-danger float-end"
                    onClick={ () => deleteName(item.id) }
                  >delete</button>
                  <button 
                    className="btn btn-info float-end"
                    onClick={ () => isEdit(item) }
                  >edit</button>
                </li>
              )
            }
          </ul>
        </div>
        <div className="col">
          <h2>Form</h2>
          <form 
            className="row g-2" 
            onSubmit={ editMode ? editName : addName }
          >
            <div className="col-auto">
              <input 
                class="form-control" 
                onChange={ (e)=>{setName(e.target.value)} }
                placeholder="Name" 
                type="text" 
                value={name}
              />
            </div>
            <div className="col-auto">
              <button type="submit" class="btn btn-primary mb-3">
                { editMode ? "Save" : "Add" } 
              </button>
            </div>
          </form>
          {
            error != null ? (
              <div className="alert alert-danger" role="alert">
                { error }
              </div>
            ):(
              <div></div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Names;
