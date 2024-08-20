import React from 'react'

function FooterColumn(props) {
  return (
    <div>
      <div className="h-32 pt-5">
           <h4><strong>{props.title}</strong></h4>
           <p className="text-sm text-gray-500">{props.values[0]}</p>
           <p className="text-sm text-gray-500">{props.values[1]}</p>
           <p className="text-sm text-gray-500">{props.values[2]}</p>
           <p className="text-sm text-gray-500">{props.values[3]}</p>
        </div>
    </div>
  )
}

export default FooterColumn
