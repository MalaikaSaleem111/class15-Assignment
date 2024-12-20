import React from 'react'

const Id  = async (props : any) => {
    console.log(props);
    const url = await fetch (`https://jsonplaceholder.typicode.com/users/${props.params.id}`)
  const response = await url.json()
  console.log(response)
  return (
    <div>
      
        <h1 className='text-2xl'>
        Name:{response.name}
        </h1>
        UserName: {response.username} <br />
        {response.email} <br />
       Address:{response.address.street} ,  {response.address.city} <br />
       Phone:{response.phone} <br />
       Website: {response.website}
        </div>
  )
}

export default Id