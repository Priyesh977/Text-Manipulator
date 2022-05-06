import React from 'react'

export default function About(props) {
  let myStyle = {
    color: props.mode === 'dark'?'white':'black',
    // backgroundColor: props.mode === 'dark'?'black':'white'
  }

  return (
    <div className="container my-4" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis alias consectetur reiciendis nihil quis magni fugit dolor officia. Veniam pariatur perspiciatis, tempora vel esse alias voluptatibus omnis. Consequuntur ab amet repudiandae pariatur voluptate tempora odit tenetur illum qui dolore adipisci, quam facilis officia soluta libero assumenda laboriosam enim obcaecati, voluptates temporibus dolores sint id nisi! Eligendi deserunt officia odit earum recusandae? Culpa minima inventore voluptate neque at, ad nulla? Incidunt amet quam accusantium aliquam ducimus ratione, hic officiis quas consequatur sit tempore harum exercitationem ad, optio cum labore repudiandae sunt similique et, cumque quo at voluptates! Dicta ipsam deleniti temporibus.
      </p>
    </div>
  )
}
