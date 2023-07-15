import { render, screen } from "@testing-library/react";
import App from "./App";


const googleMapsMock = {
  Map: jest.fn(),
  LatLng: jest.fn(),
  visualization: {
    HeatmapLayer: jest.fn(),
  },
};

global.window.google = {
  maps: googleMapsMock,
};

describe("App", () => {
  it("Should display 'Etsy Sales Map' text in the header", () => {
    render(<App />);
    expect(screen.getByText("Etsy Sales Map")).toBeInTheDocument();
  });

  it("Should render the Map component", () => {
    render(<App />);
    expect(screen.getByTestId("map-component")).toBeInTheDocument();
  });

  // it("Should render the FloatingPanel component", () => {
  //   render(<App />);
  //   expect(screen.getByTestId("floating-panel-component")).toBeInTheDocument();
  // });



});



