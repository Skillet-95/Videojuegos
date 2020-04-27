import React, { Component, Fragment } from 'react'

class CookieBar extends Component {
  state = {
    isOpened: true
  }

  closeIt = () => {
    this.setState({ isOpened: false })
  }

  render() {
    return (
      <Fragment>
        {this.state.isOpened ? (
          <section id='cookieBar' className='bg-dark text-light sticky-top py-2'>
            <div className='container'>
                Esta web no almacena cookies, pero RAWG sí. Verifica
              <a className='text-warning' href='https://rawg.io/privacy_policy'>
              {' '}su política de cookies
              </a>{' '}
              para continuar
              <button onClick={this.closeIt} type='button' className='close text-light'>
                <span>&times;</span>
              </button>
            </div>
          </section>
        ) : null}
      </Fragment>
    )
  }
}

export default CookieBar
