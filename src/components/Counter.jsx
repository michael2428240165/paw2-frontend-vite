import React, {useState} from 'react'

function Counter() {
    const [angka, setAngka] = useState(0)

    const handleIncrement =() =>{
        setAngka(angka + 1)
    }

    const handleDecrement =() =>{
        setAngka(angka - 1)
    }

  return (
    <div>
        <div className='text-6xl font-bold'>{angka}</div>
        <button className="btn btn-primary" onClick={handleIncrement}>
            Increment
        </button>
                <button className="btn btn-error" onClick={handleDecrement}>
            Decrement
        </button>
    </div>
  )
}

export default Counter