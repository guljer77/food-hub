import React from "react";
import Container from "../../../Components/Container";
import "./book.css";

function Reservation() {
  return (
    <div className="py-10">
      <Container>
        <div className="bg-table">
          <div className="bg-primary/70 rounded-lg lg:w-2/4 h-auto py-10 px-5 text-white">
            <h4 className="text-[24px] font-medium uppercase">Book A Table</h4>
            <hr className="w-[90%] border border-white" />
            <div className="py-5">
              <form action="">
                <div className="lg:flex items-center justify-between gap-5 lg:pb-3 pb-0">
                  <div className="lg:w-1/2 w-full lg:pb-0 pb-3">
                    <label className="text-[15px] pb-1 block">Name</label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full rounded outline-0 p-2 text-secondary"
                    />
                  </div>
                  <div className="lg:w-1/2 w-full lg:pb-0 pb-3">
                    <label className="text-[15px] pb-1 block">Email</label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full rounded outline-0 p-2 text-secondary"
                    />
                  </div>
                </div>
                <div className="lg:flex items-center justify-between gap-5 lg:pb-3 pb-0">
                  <div className="lg:w-1/2 w-full lg:pb-0 pb-3">
                    <label className="text-[15px] pb-1 block">Phone</label>
                    <input
                      type="text"
                      placeholder="Phone"
                      className="w-full rounded outline-0 p-2 text-secondary"
                    />
                  </div>
                  <div className="lg:w-1/2 w-full lg:pb-0 pb-3">
                    <label className="text-[15px] pb-1 block">
                      Select Date
                    </label>
                    <input
                      type="date"
                      className="w-full rounded outline-0 p-2 text-secondary"
                    />
                  </div>
                </div>
                <div className="lg:flex items-center justify-between gap-5 lg:pb-3 pb-0">
                  <div className="lg:w-1/2 w-full lg:pb-0 pb-3">
                    <label className="text-[15px] pb-1 block">
                      Select Time
                    </label>
                    <select
                      name=""
                      id=""
                      className="w-full rounded outline-0 p-2 text-secondary"
                    >
                      <option value="">Select Time</option>
                      <option value="08.00 Am To 09.00 Am">
                        08.00 Am To 09.00 Am
                      </option>
                      <option value="09.00 Am To 10.00 Am">
                        09.00 Am To 10.00 Am
                      </option>
                      <option value="10.00 Am To 11.00 Am">
                        10.00 Am To 11.00 Am
                      </option>
                      <option value="11.00 Am To 12.00 Pm">
                        11.00 Am To 12.00 Pm
                      </option>
                      <option value="12.00 Pm To 01.00 Pm">
                        12.00 Pm To 01.00 Pm
                      </option>
                    </select>
                  </div>
                  <div className="lg:w-1/2 w-full lg:pb-0 pb-3">
                    <label className="text-[15px] pb-1 block">
                      Select Person
                    </label>
                    <select
                      name=""
                      id=""
                      className="w-full rounded outline-0 p-2 text-secondary"
                    >
                      <option value="">Select Person</option>
                      <option value="2 Person">2 Person</option>
                      <option value="3 Person">3 Person</option>
                      <option value="4 Person">4 Person</option>
                      <option value="6 Person">6 Person</option>
                      <option value="10 Person">10 Person</option>
                    </select>
                  </div>
                </div>
                <div className="w-full pt-2">
                  <input
                    type="submit"
                    value="Confirm"
                    className="w-full block text-white bg-secondary py-2 cursor-pointer rounded"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Reservation;
