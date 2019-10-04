// react libraries
import React from 'react'
import {mount} from 'enzyme'

//components
import TicTacToePage from './'

describe('TicTacToePage', ()=>{
	const props = {
		handleClicked: jest.fn(), 
		checkWinner: jest.fn(),
		utils: {range:(min,max)=>Array.from({length:max-min+1}, (_,i)=>min+i)},
		winnerLine: 'Match is drawn'
	}
	let wrapper
	beforeEach(()=>{
		wrapper = mount(<TicTacToePage {...props}/>)
	})
	
	it('should render correctly', ()=> {
		const xx = wrapper.find('#board')
		xx.simulate('click')
		expect(wrapper.find('div').length).toBe(14)
		expect(wrapper).toMatchSnapshot()
	})

})
