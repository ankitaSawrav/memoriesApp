import { render , screen } from "@testing-library/react"
import Memory from './Memory.js'

test( "test the title of the memory is included correctly for each memory",()=>{
 const memory = {
        "title": "hello",
        "cloudinary_public_id": "sadasdsf",
        "cloudinary_secure_url": "/images/coast.jpg",
        "memory_date":"30/3/1093",
        "memory_description":"this is a special one ",
 }
 const userId = 12;
 render(
    <Memory memoryItem = {memory}
                        key = {0}
                        userId = {userId}
                        id = {1}
                        index = {0}
                        //prev approach not nowrking as id was getting displayed as undefined 
                        // onSelect = {()=>{selectMemory(props.id)}}
                        onSelect = {
                                (memoryId, checkBoxValue) => {
                                    selectMemory(memoryId, checkBoxValue)
                                }
                            } >
                    </Memory>
 )
 const para = screen.getByText("hello")
})

test( "test the image has the coorect src attributes memory",()=>{
    const memory = {
           "title": "hello",
           "cloudinary_public_id": "sadasdsf",
           "cloudinary_secure_url": "/images/coast.jpg",
           "memory_date":"30/3/1093",
           "memory_description":"this is a special one ",
    }
    const userId = 12;
    render(
       <Memory memoryItem = {memory}
                           key = {0}
                           userId = {userId}
                           id = {1}
                           index = {0}
                           //prev approach not nowrking as id was getting displayed as undefined 
                           // onSelect = {()=>{selectMemory(props.id)}}
                           onSelect = {
                                   (memoryId, checkBoxValue) => {
                                       selectMemory(memoryId, checkBoxValue)
                                   }
                               } >
                       </Memory>
    )
    const img = screen.getByTestId("memory-image")
    expect(img).toHaveAttribute('src','/images/coast.jpg')
   })

   test( "test the description of the memory is included correctly for each memory",()=>{
    const memory = {
           "title": "hello",
           "cloudinary_public_id": "sadasdsf",
           "cloudinary_secure_url": "/images/coast.jpg",
           "memory_date":"30/3/1093",
           "memory_description":"this one",
    }
    const userId = 12;
    render(
       <Memory memoryItem = {memory}
                           key = {0}
                           userId = {userId}
                           id = {1}
                           index = {0}
                           //prev approach not nowrking as id was getting displayed as undefined 
                           // onSelect = {()=>{selectMemory(props.id)}}
                           onSelect = {
                                   (memoryId, checkBoxValue) => {
                                       selectMemory(memoryId, checkBoxValue)
                                   }
                               } >
                       </Memory>
    )
    const para = screen.getByText("this one")
   })
   
   