import React, { Component } from 'react'
import Trending from './homepageTrending'
import SkeletonLoad from './homepageSkeletonLoad'
import data1 from  '../json/topRatedRecommended.json'
class Homepage extends Component {
  state = {
    data: data1,
    dataIsReady: false,
    topVideogameCount: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 },
      { id: 5, value: 4 },
      { id: 6, value: 5 },
      { id: 7, value: 6 },
      { id: 8, value: 7 },
      { id: 9, value: 8 },
      { id: 10, value: 9 }
    ]
  }

  componentDidMount() {
    this.getRawgApi()
  }

  getRawgApi = async () => {
    try {
    
      this.setState({ data: data1, dataIsReady: true })
    } catch (e) {
      console.error(e)
    }
  }

  render() {
  
    return (
      <main className='bg-dark py-5'>
        <article className='container'>
          <div className='row'>
            {this.state.topVideogameCount.map(videogames =>
              data1 ? (
                <Trending key={videogames.id} value={videogames.value} data={this.state.data} />
              ) : (
                <SkeletonLoad key={videogames.id} />
              )
            )}
          </div>
        </article>
      </main>
    )
  }
}

export default Homepage
