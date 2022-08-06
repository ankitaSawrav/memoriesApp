import { render , screen } from "@testing-library/react"
import About from './About.js'

test("get the About page heading",()=>{
    
    render (
        <About/>
    )

    const para = screen.getByText("Yaadein....")

})