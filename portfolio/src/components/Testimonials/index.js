import React from "react";
import "./style.css";

export default function Testimonials() {
  return (
    <>
      <div id="testimonials" className="container-fluid">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <blockquote>
              <p>
                "Eric worked for our IT department working on projects for our
                high value customers. Eric studied the customer requirements and
                learned the work very quickly helping to deliver on time and on
                budget. Eric also completed additional education programs so
                that he has a very broad range of skills that will enable him to
                be successful in any future work he performs."
              </p>
              <cite>
                <strong>- Jeffrey Brown</strong>
              </cite>
              <p>
                <i>VP of Operations - JANA, Inc.</i>
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
}
