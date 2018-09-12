import Enzyme from "enzyme"
import DotEnv from "dotenv"

DotEnv.config({
    path:".env.test"
})
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter:new Adapter()
})