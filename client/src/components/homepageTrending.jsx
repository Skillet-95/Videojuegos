import React, { Component, Fragment } from 'react'
import data1 from  '../json/topRatedRecommended.json'
class Trending extends Component {




  render() {
 
      return (
        <div className='col-md-6'>
          <a  className='text-decoration-none'>
            <div className='card bg-dark text-white border-0'>
              <div>
                <div className='img-zoom-container card-background bg-secondary'>
                  <div className='img-zoom'>
                    <img className='card-img-top' alt='videogame poster' src={"https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"} />
                  </div>
                </div>
                <div className='badge-pill badge-warning position-absolute mt-4 right-badge'>★{2}/5</div>
              </div>
              <div className='card-body'>
                <div className='badge-pill badge-dark display-5 position-absolute badge-position'>
                  #<strong>333</strong>
                </div>
                <h2 className='position-absolute h2-position'>
                Borderlands
                </h2>
                <div className='position-absolute platform-badge-position'>
               33
                </div>
                <div>
               
                    <Fragment>
                      {/* skeleton loading for overviews */}
                      Borderlands es una serie de videojuegos de acción y disparos en primera persona ambientados en escenarios space western y de ciencia ficción fantástica, desarrollados por Gearbox Software para múltiples plataformas
                    </Fragment>
             
                </div>
              </div>
            </div>
          </a>
        </div>
      )
   
  }

}

export default Trending
