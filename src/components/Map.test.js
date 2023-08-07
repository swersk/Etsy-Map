import { render, screen } from "@testing-library/react";
import Map from "./components/Map";

jest.mock("./components/Map", () => {
  // Mocking the Google Maps API
  const googleMapsMock = {
    Map: jest.fn(),
    LatLng: jest.fn(),
    visualization: {
      HeatmapLayer: jest.fn(),
    },
  };

  return {
    ...jest.requireActual("./components/Map"), // Keep the original module functionality
    // Set google as a global object
    global: {
      google: {
        maps: googleMapsMock,
      },
    },
  };
});

describe("Map Component", () => {
  // Test 1: Should render the map element
  it("Should render the map element", () => {
    render(<Map />);
    expect(screen.getByTestId("map")).toBeInTheDocument();
  });

  // Test 2: Should render the FloatingPanel and FunFact components
  it("Should render the FloatingPanel and FunFact components", () => {
    render(<Map />);
    expect(screen.getByTestId("floating-panel")).toBeInTheDocument();
    expect(screen.getByTestId("fun-fact")).toBeInTheDocument();
  });
});
