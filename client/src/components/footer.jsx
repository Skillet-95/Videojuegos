import React, { Component } from 'react'
import logoDark from './../img/logo-big-dark.svg'

class Footer extends Component {
  render() {
    return (
      <footer className='bg-light'>
        <div className='container py-3'>
          <div className='row justify-content-md-center'>
            <div className='col align-self-center text-center'>
              <img alt='logo' src={logoDark} className='resized-logo-footer' />
              <p className='text-center mt-2'>copyright © 2020 Nidea</p>
            </div>
            <div className='col align-self-end'>
              <p className='lead'>
       ¡Copia de juegos directamente a su casa sin cobro adicional!
                <br />
                -Creado por Nidea-
            
              </p>
              <p>
                <span className='badge badge-dark'>#XBOX</span>{' '}
                <span className='badge badge-warning'>#PC</span>{' '}
                <span className='badge badge-primary'>#SWITCH</span>{' '}
                <span className='badge badge-danger'>#PlayStation</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
