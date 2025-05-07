import React from 'react'

const Jumbotron = () => {
  return (
  <div className="container">
    <div className="jumbotron bg-light text-black p-5">
      <h1 className="d-flex justify-content-start">A warm welcome!</h1>
      <p className="text-start lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nobis quam, sequi laborum dignissimos assumenda reiciendis eligendi quisquam veritatis quis suscipit. Nisi magni perspiciatis porro. Labore vitae debitis nemo quisquam veritatis id obcaecati, odio ipsum ut, praesentium quasi, distinctio maxime..</p>
        <p className="lead">
          <a className="col-ms d-flex justify-content-start btn btn-primary btn-lg" href="#" role="button" style={{width: "20%"}}>Call to Action!</a>
        </p>
    </div>
    </div>
  )
}

export default Jumbotron