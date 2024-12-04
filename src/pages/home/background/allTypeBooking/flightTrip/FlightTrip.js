import React from "react";
import From from "./wayPart/From";
import To from "./wayPart/To";
import Journey from "./wayPart/Journey";
import ReturnJourney from "./wayPart/ReturnJourney";
import Traveler from "./wayPart/Traveler";

export default function FlightTrip() {
  return (
    <div>
      <div className="flex gap-3">
        <div>
          <From></From>
        </div>

        <div>
          <To></To>
        </div>
      <div className="flex gap-0 border border-[#f1f1f1] rounded-[16px]">
      <div>
          <Journey></Journey>
        </div>
        <div>
          <ReturnJourney></ReturnJourney>
        </div>
      </div>
        <div>
          <Traveler></Traveler>
        </div>
      </div>
    </div>
  );
}
