//react libraries
import React from 'react'
import {shallow} from 'enzyme'

//components
import TicTacToeDisplay from './'

describe('TicTacToeDisplay', ()=>{
  let wrapper
  beforeEach(()=>{
    const props={
      winnerLine: 'Match is drawn', 
      handleClicked:jest.fn(),
      utils:{range:(min,max)=>Array.from({length:max-min+1}, (_,i)=>min+i)
    }
  }
    wrapper= shallow(<TicTacToeDisplay {...props}/>)
  })
  it('should render correctly', () => expect(wrapper).toMatchSnapshot())
})
