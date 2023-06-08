import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import RrightSection from './RrightSection';


const Home = () => {
  return (
    <>
      <div className="container mt-3">
        <section className='d-flex justify-content-between'>
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className='text-center col-lg-6'>Sign up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                <Form.Control type="Name" placeholder="Enter Your Name" />

              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                <Form.Control type="email" placeholder="Enter email" />

              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                <Form.Control type="date" />

              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" className='col-lg-6' style={{ background: "green" }} type="submit">
                Submit
              </Button>
            </Form>
            <p className='mt-3'>Already Have an Acoount? <span>SignIn</span></p>
          </div>
          <RrightSection/>
        </section>
      </div>
    </>
  )
}

export default Home