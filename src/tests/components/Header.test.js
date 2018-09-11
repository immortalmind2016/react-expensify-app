//react-test-render
//import ReactShallowRenderer from "react-test-renderer/shallow" we used Enzyme instead
import React from "react";
import {shallow} from "enzyme"
import Header from "../../components/Header"
import toJson from 'enzyme-to-json';

test("should test Header component",()=>{

const wrapper=shallow(<Header />);
//expect(wrapper.find("h1").text()).toBe("Expensify")

//expect(toJson(wrapper)).toMatchSnapshot();  
// now i can use it without toJson instead because i'm configurated my jest.config.json file
expect(wrapper).toMatchSnapshot();  

})


//test("should render header correctly ",()=>{
  //  const renderer=new ReactShallowRenderer();
   // renderer.render(<Header />)
   // expect(renderer.getRenderOutput()).toMatchSnapshot() 
    // will generate snapshot to my Component and save it
    // next time i can accept new changes or now
    // we will use enzyme because it's difcult to use renderer with complex components
    // raf Libirary -> request animation frame ( for browser )

//})