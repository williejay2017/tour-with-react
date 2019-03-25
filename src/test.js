import {TourGuide} from "./index";
import React from 'react';
import {shallow} from 'enzyme';
import './testSetup';

const steps = [
  {
      id: 'Tour Test',
      options: {
          title: 'Test',
          text:  'This is a test of tour guide',
          attachTo: '.test bottom',
          buttons: [
              {
                type: 'hide',
                text: 'Done'
              }
            ]
      }
  }
]

describe('<TourGuide />', () => {
  it('should render children ', () => {
    const wrapper = shallow((
      <TourGuide steps = {steps}>
        <div className='child'/>
      </TourGuide>
    ));
    expect(wrapper.contains(<div className='child'/>));
  });
});
