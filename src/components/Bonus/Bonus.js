import React from "react";
import "./Bonus.css";
const Bonus = () => {
  return (
    <div className="container mt-5">
      <h3 className="text-center fst-italic">
        <span className="text-danger">Question-1:</span> What are the
        differences between props and state ?
      </h3>

      <h3 className="text-success">Answer:</h3>
      <h4 className="text-center text-decoration-underline mb-3">Props</h4>
      <p className="fw-bold">
        1. Data is transmitted from one component to another.
      </p>
      <p className="fw-bold">2. It is immutable</p>
      <p className="fw-bold">
        3. Props can be used with state and functional elements.
      </p>
      <p className="fw-bold">4. Props are read-only.</p>
      <h4 className="text-center text-decoration-underline my-3">State</h4>
      <p className="fw-bold">
        1. The information is only passed into the component.
      </p>
      <p className="fw-bold">2. It is Mutable.</p>
      <p className="fw-bold">
        3. State can only be used with state component / component.
      </p>
      <p className="fw-bold">4. State is both read and write.</p>

      <h3 className="text-center fst-italic mt-3">
        <span className="text-danger">Question-2:</span> How does useState work?
      </h3>
      <h3 className="text-success">Answer:</h3>
      <p className="fw-bold second-answer">
        useState() is a hook that allows us to have state variables in
        functional components. There are two types of reaction components, one
        is the class component which is ES6 class which extends from the
        reaction and the other is the functional component. Class material can
        have a component and state and life cycle method: class extends the
        message response. The useState hook is a special function that takes the
        initial state as an argument and returns an array of two entries. We
        pass the initial state to this function and it provides a variable with
        the current state value (not the initial state) and another function to
        update this value.
      </p>
    </div>
  );
};

export default Bonus;
