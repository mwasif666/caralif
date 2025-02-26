import { useState } from "react";

const AppointmentAreaTwo = () => {
  const [date, setDate] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value); // Selected date ko store karega
  };
  const [time, setTime] = useState("");

  const handleTimeChange = (e) => {
    setTime(e.target.value); // Selected time ko store karega
  };
  return (
    <div
      className="appointment-area-2 bg-smoke overflow-hidden"
      style={{ backgroundImage: "url(assets/img/bg/appointment-bg2-1.png)" }}
    >
      <div className="container">
        <div className="row gx-0">
          <div className="col-xl-6">
            <div className="space">
              <div className="title-area2">
                <div className="title-area">
                  <span className="sub-title">Send a request</span>
                  <h3 className="sec-title">
                    Talk to our experts for Vehicle advice <br /> for as low as
                    $15 for 30 minutes
                  </h3>
                  <h4 className="color-grey">
                    Buy, sell, compare or simply obtain information
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="space">
              <div className="appointment-form-wrap bg-white">
                <div className="title-area">
                  <span className="sub-title">Send a request</span>
                  <h2 className="sec-title">Talk to an expert</h2>
                </div>
                <form
                  action="mail.php"
                  method="POST"
                  className="appointment-form ajax-contact"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control style-border"
                          name="name"
                          id="name"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control style-border"
                          name="number"
                          id="number"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 position-relative">
                      <div className="form-group">
                        {/* Fake Input Field for Custom Placeholder */}
                        <input
                          type="text"
                          className="form-control style-border"
                          value={
                            date ? new Date(date).toLocaleDateString() : ""
                          }
                          placeholder="Meeting Date"
                          onFocus={(e) => e.target.nextSibling.showPicker()} // Open date picker
                          readOnly // User manually input na kar sake
                        />
                        {/* Hidden Date Picker */}
                        <input
                          type="date"
                          className="hidden-date-picker"
                          onChange={handleDateChange}
                        />
                      </div>
                    </div>

                    <div className="col-md-6 position-relative">
                      <div className="form-group">
                        {/* Fake Input Field for Custom Placeholder */}
                        <input
                          type="text"
                          className="form-control style-border"
                          value={time ? time : ""}
                          placeholder="Meeting Time"
                          onFocus={(e) => e.target.nextSibling.showPicker()} // Open time picker
                          readOnly // User manually input na kar sake
                        />
                        {/* Hidden Time Picker */}
                        <input
                          type="time"
                          className="hidden-time-picker"
                          onChange={handleTimeChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-btn col-12">
                    <button className="btn style2">
                      Proceed to Payment{" "}
                      <i className="fas fa-arrow-right ms-2" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentAreaTwo;
