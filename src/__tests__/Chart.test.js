import React from "react";
import { mount } from "enzyme";
import { Line } from "react-chartjs-2";
import Chart from "../components/Chart";

it("should render charts based on data passed in props", () => {
  let labels = [1, 2, 3, 4, 5];
  let datasetsLabel = "test data sets label";
  let datasetsData = [10, 20, 30, 40, 50];
  let datasetsBackgroundColor = ["red", "yellow", "blue"];

  let mockData = {
    id: 1,
    labels,
    datasets: [
      {
        label: datasetsLabel,
        backgroundColor: datasetsBackgroundColor,
        data: datasetsData
      }
    ]
  };
  window.HTMLCanvasElement.prototype.getContext = () => {}

  let wrapper = mount(<Chart data={mockData} />);

  expect(wrapper.find("Line").props().data.labels).toEqual(labels);
  expect(wrapper.find("Line").props().data.datasets[0].label).toEqual(
    datasetsLabel
  );
  expect(wrapper.find("Line").props().data.datasets[0].data).toEqual(
    datasetsData
  );
  expect(wrapper.find("Line").props().data.datasets[0].backgroundColor).toEqual(
    datasetsBackgroundColor
  );
  
});
