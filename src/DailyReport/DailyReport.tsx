import React, { useCallback, useReducer, useRef } from "react";
import ReportDisplay from "./ReportDisplay";

interface Todo {
  id: number;
  report: {
      date:string,
      reportTitle:string,
      details:string
  };
}
// Todo[]
type ActionType =
  | { type: "ADD"; report: {date:string,reportTitle:string,details:string} }
  | { type: "REMOVE"; id: number };

  const [todos, dispatch] = useReducer((state: Todo[], action: ActionType) => {
    switch (action.type) {
      case "ADD":
        return [
          ...state,
          {
            id: state.length,
            report: action.report,
          },
        ];
      case "REMOVE":
        return state.filter(({ id }) => id !== action.id);
    }
  }, []);

  const date = useRef<HTMLInputElement>(null);
  const reportTitle = useRef<HTMLInputElement>(null);
  const details = useRef<HTMLInputElement>(null);

  // useCallback
  const handleToAddDisplay = useCallback(() => {
    if (reportTitle.current) {
      dispatch({
        type: "ADD",
        report:{date:date.current?.value,reportTitle:reportTitle.current?.value,details:details.current?.value}
      });
      date.current.value = "";
      reportTitle.current.value = "";
      details.current.value = "";
    }
  }, []);

// function DailyReport() {
//   const handleToAddDisplay = (e: any): any => {
//     e.preventDefault();


//   };
  return (
    <div>
      <h2>Daily Report</h2>
      <form
        style={{
          border: "2px solid gray",
          width: "40%",
          borderRadius: "5px",
          padding: "40px 0",
          margin: "0 auto",
        }}
        onSubmit={handleToAddDisplay}
      >
        <input
        ref={date}
          type="text"
          name="date"
          placeholder="Date"
          style={{
            width: "400px",
            padding: "10px",
            borderRadius: "5px",
            margin: "10px 5px",
          }}
        />
        <br />
        <input
        ref={reportTitle}
          type="text"
          name="reportTitle"
          placeholder="Report Title"
          style={{
            width: "400px",
            padding: "10px",
            borderRadius: "5px",
            margin: "10px 5px",
          }}
        />
        <br />
        <textarea
        ref={details}
          placeholder="Write here your report details..."
          style={{
            width: "400px",
            height: "50px",
            padding: "10px",
            borderRadius: "5px",
            margin: "10px 5px",
            border: "2px solid",
          }}
        />
        <br />
        <input
          type="submit"
          value="Post"
          style={{
            padding: "10px 60px",
            borderRadius: "5px",
            margin: "10px 5px",
            fontWeight: "600",
          }}
        />
      </form>
      <ReportDisplay key={re} />
    </div>
  );
}

export default DailyReport;
