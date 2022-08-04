import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
const originalEnv = process.env;
let mockAxios;
beforeAll(() => {
    // Before we run any tests, set up the mock version of axios
    process.env = {
      REACT_APP_TMDB_API_KEY: "PRETEND_FILM_API_KEY",
    };
    mockAxios = new MockAdapter(axios);
  });
  
  afterEach(() => {
    // After each test, reset the mock (so one test can't interfere with another)
    mockAxios.reset();
  });
  
  afterAll(() => {
    // After we're done testing, put normal axios back where it was.
    process.env = originalEnv;
    mockAxios.restore();
  });

test("api call the database and gets memories information",()=>{
    const memory = [{
                   "title": "hello",
                   "cloudinary_public_id": "sadasdsf",
                   "cloudinary_secure_url": "/images/coast.jpg",
                   "memory_date":"30/3/1093",
                   "memory_description":"this is a special one ",
                },
                {
                    "title": "dreamy",
                    "cloudinary_public_id": "yelo",
                    "cloudinary_secure_url": "/images/coast.jpg",
                    "memory_date":"30/3/1093",
                    "memory_description":"this is a special one ",
                 }
                ]


    mockAxios.onGet().reply(200, mockResponseData);
    render(<Memories></Memories>)


    await waitFor(() => expect(screen.getAllByTestId("memory-image")));
    const img = screen.getAllByTestId("memory-image")
    expect(img.length).toEqual(2)



})

