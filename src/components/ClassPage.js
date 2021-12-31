import React from 'react';
import { useParams } from 'react-router-dom';

const ClassPage = () => {
  let {classname} = useParams();
  return <div>class name: {classname}</div>
};

export default ClassPage;
