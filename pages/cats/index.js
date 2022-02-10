import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import DefaultLayout from '../../layouts/Default'
const index = () => {

  const [cats, setCats] = useState([])
  const fetchCats = async () => {
    const response = await fetch('/api/cats')
    const data = await response.json();
    console.log(data)
    setCats(data)
  }
  useEffect(() => {
    fetchCats()
  }, [])
  return (
    <>
      <DefaultLayout>
        <div className="container mt-5">
          <div className="d-flex flex-wrap justify-content-between">

            {cats.map(cat => (
              <Card
                name={cat.name}
                id={cat.id}
                phone={cat.phone}
                image={cat.image}
                email={cat.email}
              />
            ))}
          </div>
        </div>
      </DefaultLayout>
    </>
  )
}

export default index